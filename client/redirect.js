// const url = 'https://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
// const url = 'discord://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
const url = 'discord://discordapp.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
// const url = 'https://discordapp.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
/*
let requesting = browser.permissions.request(
    permissions
  )
  */

setTimeout(() => {
    redirect();
}, 10000);

/*
window.addEventListener('load', (event) =>{

    console.log(Page Loaded);

});
*/

function redirect() {
    window.open(url, '_system');
}