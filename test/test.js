
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

	it('Termina en AR, se le quitan las dos letras', function(){
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})
	it('Empieza con Z, se le añade "pe" al final', function(){
		const translation = platzom("Zorro")
		expect(translation).to.equal("Zorrope")
		const translation2 = platzom("Zarpar")
		expect(translation2).to.equal("Zarppe")
	})
	it('>= 10 letras, se divide la palabra en dos con un "-" en medio', function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})
	it('Palindromo, se escribe alternando mayus y minus', function(){
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})

})