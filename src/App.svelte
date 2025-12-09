<script>
  import { generateMnemonic } from "bip39";
  import SolanaWallet from "./SolanaWallet.svelte";
  import EthWallet from "./EthWallet.svelte";

  let mnemonic = "";

  function createSeedPhrase() {
    const mn = generateMnemonic(); // sync
    mnemonic = mn;
  }
</script>

<main style="padding: 2rem; font-family: sans-serif;">
  <h1>Web Wallet (Svelte)</h1>

  <div style="margin-bottom: 1rem;">
    <button on:click={createSeedPhrase}>
      Create Seed Phrase
    </button>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <!-- Two-way binding in Svelte -->
    <input
      type="text"
      bind:value={mnemonic}
      placeholder="Your mnemonic phrase will appear here"
      style="width: 100%; padding: 0.5rem;"
    />
  </div>

  {#if mnemonic}
    <h2>Solana Wallets</h2>
    <SolanaWallet {mnemonic} />

    <h2 style="margin-top: 2rem;">Ethereum Wallets</h2>
    <EthWallet {mnemonic} />
  {:else}
    <p>Generate or paste a mnemonic to start creating wallets.</p>
  {/if}
</main>
