var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamento ${hora} horas.`)
if (hora < 12) {
    console.log('Good morning')
} else if (hora <= 18) {
    console.log('Good afternoon!')
} else {
    console.log('Good Evening')
}