import { useEffect, useRef, useState } from 'react'
import { initialSettings } from './initialSettings'
import { desliceVertical } from './desliceVertical'
import { hide, hideReset } from './hide'
import { getMatchInitialPosition } from './getMatchInitialPosition'

export const useVerticalStickyPlus = ({
	range = null,
	positionName = 'top',
	matchInitialPosition: activeMatchInitialPosition = false,
} = {}) => {
	const elementRef = useRef(null)
	const [isMatchInitialPosition, setIsMatchInitialPosition] = useState(true)

	useEffect(() => {
		initialSettings(elementRef.current, { positionName })
	}, [positionName])

	useEffect(() => {
		const element = elementRef.current
		let timeoutlHide = null
		let timeoutlHideReset = null
		const scroll = () => {
			desliceVertical(element, { positionName, range })

			timeoutlHide && clearTimeout(timeoutlHide)
			timeoutlHide = setTimeout(() => {
				hide(element, { positionName, range })
				timeoutlHideReset && clearTimeout(timeoutlHideReset)
				timeoutlHideReset = setTimeout(() => hideReset(element), 100)
			}, 200)

			if (activeMatchInitialPosition) {
				const matchInitialPosition = getMatchInitialPosition(element)
				isMatchInitialPosition !== matchInitialPosition &&
					setIsMatchInitialPosition(matchInitialPosition)
			}
		}

		document.addEventListener('scroll', scroll)

		return () => document.removeEventListener('scroll', scroll)
	}, [positionName, range, isMatchInitialPosition])

	return [elementRef, { isMatchInitialPosition }]
}
