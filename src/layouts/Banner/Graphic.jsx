import { Flex } from '@chakra-ui/react'
import { GraphicLogo } from './GraphicLogo'
import { GraphicProducts } from './GraphicProducts'
import { GraphicProduct } from './GraphicProduct'

export const Graphic = () => {
	const products = [
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-01.webp?alt=media&token=923d3bd3-7bd8-4c76-81da-1c40e267a738',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-02.webp?alt=media&token=52223b90-a5ef-4e51-90f9-3f1bb02d1ad2',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-03.webp?alt=media&token=da96ab65-98c6-42d3-9b5f-2ed491f757b0',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-04.webp?alt=media&token=dc077ab0-a597-45c0-b141-dd7fbdde3341',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-05.webp?alt=media&token=a83950d8-a7dd-4d9b-ab0e-52d0af0976d7',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-06.webp?alt=media&token=6f0c69dd-62f7-4f00-9049-25f6c81faec2',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-07.webp?alt=media&token=54bae2d5-f391-486e-857f-0b9e25d630cb',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-08.webp?alt=media&token=e9b8e4b8-552c-4108-ab55-14f9a2bb1bef',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-09.webp?alt=media&token=b6243972-d535-442a-bd41-77042257f2be',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-10.webp?alt=media&token=a5bc1682-dfca-4d99-8669-71195fdc2519',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-11.webp?alt=media&token=756b00c7-6ae5-4c03-ab29-3ac7bf4f0734',
		'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fproduct-12.webp?alt=media&token=798b4371-cac4-46ec-b67b-cd136d2396e6',
	]

	return (
		<Flex
			sx={{
				position: 'absolute',
				top: 0,
				justifyContent: 'center',
				alignItems: 'center',
				height: '96%',
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
						size='20%'
					/>
				))}
			</GraphicProducts>
			<GraphicProducts size='55%' rotationDirection='reverse'>
				{products.slice(8, 12).map((product, i) => (
					<GraphicProduct
						key={product}
						src={product}
						rotation={(360 / 4) * -i}
						deley={(32 / 4) * -i}
						size='18%'
					/>
				))}
			</GraphicProducts>
			<GraphicLogo />
		</Flex>
	)
}
