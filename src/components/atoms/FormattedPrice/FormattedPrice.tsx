import NumberFormat from 'react-number-format'

interface Props {
	value: number
}

const FormattedPrice = ({ value }: Props) => {
	return (
		<NumberFormat value={value} displayType='text' thousandSeparator prefix='₱' />
	)
}

export default FormattedPrice