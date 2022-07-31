import product01 from '../../assets/banner/product-01.webp'
import product02 from '../../assets/banner/product-02.webp'
import product03 from '../../assets/banner/product-03.webp'
import product04 from '../../assets/banner/product-04.webp'
import product05 from '../../assets/banner/product-05.webp'
import product06 from '../../assets/banner/product-06.webp'
import product07 from '../../assets/banner/product-07.webp'
import product08 from '../../assets/banner/product-08.webp'
import product09 from '../../assets/banner/product-09.webp'
import product10 from '../../assets/banner/product-10.webp'
import product11 from '../../assets/banner/product-11.webp'
import product12 from '../../assets/banner/product-12.webp'
import { Flex } from '@chakra-ui/react'
import { GraphicLogo } from './GraphicLogo'
import { GraphicProducts } from './GraphicProducts'
import { GraphicProduct } from './GraphicProduct'

export const Graphic = () => {
	const products = [
		product01,
		product02,
		product03,
		product04,
		product05,
		product06,
		product07,
		product08,
		product09,
		product10,
		product11,
		product12,
	]

	return (
		<Flex
			sx={{
				position: 'absolute',
				top: 0,
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				aspectRatio: '1 / 1',
			}}
		>
			<GraphicProducts>
				{products.slice(0, 8).map((product, i) => (
					<GraphicProduct
						key={product}
						src={product}
						rotationDirection='reverse'
						rotation={(360 / 8) * i}
						deley={(32 / 8) * -i}
						size='15%'
					/>
				))}
			</GraphicProducts>
			<GraphicProducts size='60%' rotationDirection='reverse'>
				{products.slice(8, 12).map((product, i) => (
					<GraphicProduct
						key={product}
						src={product}
						rotation={(360 / 4) * -i}
						deley={(32 / 4) * -i}
						size='15%'
					/>
				))}
			</GraphicProducts>
			<GraphicLogo />
		</Flex>
	)
}
