export class Heading {
  id: string
  text: string | null
  depth: 1 | 2 | 3
  parent?: Heading
  children: Heading[] = []

  constructor(heading: HTMLHeadingElement) {
    this.id = heading.id
    this.text = heading.textContent
    this.depth = this.computeDepth(heading)
  }

  private computeDepth(heading: HTMLHeadingElement): 1 | 2 | 3 {
    switch (heading.tagName) {
      case 'H1':
        return 1

      case 'H2':
        return 2

      case 'H3':
        return 3

      default:
        throw new Error('Non-supported type of heading element')
    }
  }

  addable(heading: Heading): boolean {
    return this.depth < heading.depth
  }

  addChild(child: Heading): void {
    this.children.push(child)
    child.parent = this
  }

  hasChild(): boolean {
    return Boolean(this.children.length)
  }
}

export const organizeHeadings = (content: string): Heading[] => {
  const organizedHeadings: Heading[] = []

  const tempContainer: HTMLDivElement = document.createElement('div')
  tempContainer.innerHTML = content

  const headings: HTMLHeadingElement[] = Array.from(
    tempContainer.querySelectorAll('h1, h2, h3')
  )

  headings
    .map((heading: HTMLHeadingElement) => new Heading(heading))
    .forEach((heading: Heading, idx: number, headingList: Heading[]) => {
      if (heading.depth === 1) {
        organizedHeadings.push(heading)
      } else {
        const prevHeading: Heading | undefined = headingList[idx - 1]
        if (!prevHeading)
          throw new Error('Invalid structure of heading elements')

        if (prevHeading.depth === heading.depth) {
          const parentHeading: Heading | undefined = prevHeading.parent
          if (!parentHeading)
            throw new Error('Invalid structure of heading elements')
          parentHeading.addChild(heading)
        } else if (prevHeading.depth > heading.depth) {
          let parentHeading: Heading | undefined = prevHeading.parent
          if (!parentHeading)
            throw new Error('Invalid structure of heading elements')

          while (parentHeading.depth !== heading.depth) {
            parentHeading = parentHeading.parent
            if (!parentHeading)
              throw new Error('Invalid structure of heading elements')
          }

          if (!parentHeading?.parent)
            throw new Error('Invalid structure of heading elements')
          parentHeading.parent.addChild(heading)
        } else {
          prevHeading.addChild(heading)
        }
      }
    })

  tempContainer.remove()
  return organizedHeadings
}
