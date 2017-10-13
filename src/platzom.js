export default function platzom(str){
	let traduccion = str
	//Termina en AR, se le quitan las dos letras
	if(str.toLowerCase().endsWith('ar')){
		traduccion = str.slice(0,-2)
	}
	//Empieza con Z, se le añade "pe" al final
	if(str.toLowerCase().startsWith('z')){
		traduccion += 'pe'
	}
	//>= 10 letras, se divide la palabra en dos con un "-" en medio
	const length = traduccion.length
	if(length>=10){
		const firstHalf  = traduccion.slice(0, Math.round(length/2))
		const secondHalf = traduccion.slice(Math.round(length/2))
		traduccion = `${firstHalf}-${secondHalf}`
	}
	//Palindromo, se escribe alternando mayus y minus
	const reverse = (str) => str.split('').reverse().join('')

	function minMay (str){
		const length = str.length
		let traduccion = ''
		let capitalize = true

		for(let i=0; i<length; i++){
			const char = str.charAt(i)
			traduccion += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return traduccion
	}

	if (str == reverse(str)){
		return minMay(str)
	}
	return traduccion
}