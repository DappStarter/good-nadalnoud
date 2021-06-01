require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food toward rate mad miss hunt private army gentle'; 
let testAccounts = [
"0xfa2cab2cf250cdbd815ef118ccba4cc374c4e644ae517fa2ff1f333b71e50e69",
"0x2d686c8fe1361d6b2bbca8cd87f169db0048aa2b721419fc370d36bb9a05957e",
"0xd56396d3a556608a8cb6f947c16278315a50e995aeea7da6fa7a1c5d041a615b",
"0xf97f14e595541463f17997a1a0af9ec3eb4cbacb2c4c6af5a8c171e105e6635e",
"0xe16cd6d0caa37dd286b8eb9cbc42a2d883c2453ff7d9ce14461955070ea63793",
"0xd4c42d9a856bea148873789571993e4a49af05b9e083dcb9728648c5f71d2ed3",
"0x3e8e89d7113bf9fdccba311f08518b8da182f17c3662ad933fb42ef18f708051",
"0x9b00c38a58884cf811e79c508d26387aa844c2ca4e91717bb3c2932710c2f850",
"0x8603eb7d40a94f1e807d845bd8cc0453c4a40fe1903676f5bd1f684b8646fe13",
"0xe64a19b58d2fd9e3fbee70438404f6eb7ba2da31fabd013ebfd34608cbc452a0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

