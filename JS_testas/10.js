let psw = ''
let pswIlgis = 12
const raides = 'qwertyuiopasdfghjklzxcvbnm'
const raidesD = 'QWERTYUIOPASDFGHJKLZXCVBNM'
const skaiciai = '1234567890'
const simboliai = '!@#$%^&*()_+'
let galimiSimboliai = raides + raidesD + skaiciai + simboliai
psw += raides.charAt(Math.floor(Math.random() * raides.length))
psw += raidesD.charAt(Math.floor(Math.random() * raidesD.length))
psw += skaiciai.charAt(Math.floor(Math.random() * skaiciai.length))
psw += simboliai.charAt(Math.floor(Math.random() * simboliai.length))
// console.log(galimiSimboliai);
for (let i = 0; i < (pswIlgis-4); i++) {
    psw += galimiSimboliai.charAt(Math.floor(Math.random() * galimiSimboliai.length))
}
psw = psw.split('').sort(() => Math.random() - 0.5).join('')
console.log(psw)