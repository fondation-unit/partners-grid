export type EditProps = {
	attributes: Attributes
	setAttributes: (attributes: Attributes) => void
}

type Attributes = {
    content: string | any
}
