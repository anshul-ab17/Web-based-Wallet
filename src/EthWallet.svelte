<script>
  import { mnemonicToSeed } from "bip39";
  import { Wallet, HDNodeWallet } from "ethers";

  export let mnemonic;

  let currentIndex = 0;
  let addresses = [];

  async function addEthWallet() {
    if (!mnemonic) return;

    const seed = await mnemonicToSeed(mnemonic); // Buffer
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;

    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);

    currentIndex = currentIndex + 1;
    addresses = [...addresses, wallet.address];
  }
</script>

<div style="margin-top: 0.5rem;">
  <button on:click={addEthWallet}>
    Add ETH wallet
  </button>

  {#each addresses as addr}
    <div>Eth - {addr}</div>
  {/each}
</div>

