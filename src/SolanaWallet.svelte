<script>
  import { mnemonicToSeed } from "bip39";
  import { derivePath } from "ed25519-hd-key";
  import { Keypair } from "@solana/web3.js";
  import nacl from "tweetnacl";

  export let mnemonic;

  let currentIndex = 0;
  let publicKeys = [];

  async function addWallet() {
    if (!mnemonic) return; 
    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;

    const derived = derivePath(path, seed.toString("hex"));
    const derivedSeed = derived.key;  

    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);

    currentIndex = currentIndex + 1;
    publicKeys = [...publicKeys, keypair.publicKey.toBase58()];
  }
</script>

<div style="margin-top: 0.5rem;">
  <button on:click={addWallet}>
    Add Solana wallet
  </button>

  {#each publicKeys as p}
    <div>Sol - {p}</div>
  {/each}
</div>
