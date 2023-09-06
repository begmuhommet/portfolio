const typingText = [
  `<span class="text-primary-main">import </span>`,
  `React, { useEffect, useState } `,
  `<span class="text-primary-main">from </span>`,
  `<span class="text-custom-green">'react'</span>`,
  `<span class="text-primary-main">;</span>`,

  `<br />`,

  `<span class="text-primary-main">import </span>`,
  `{ useConnect } `,
  `<span class="text-primary-main">from </span>`,
  `<span class="text-custom-green">'wagmi'</span>`,
  `<span class="text-primary-main">;</span>`,

  `<br />`,
  `<br />`,

  `<span class="text-primary-main">const </span>`,
  `<i class="text-custom-blue font-bold">WalletConnect</i>`,
  `: React.FC = `,
  `(props`,
  ` => {`,

  `<br />`,

  `<span class="pl-5"><span class="text-primary-main">const </span> [showWallets, setShowWallets] = <span class="text-secondary-main">useState</span>(<span class="text-primary-main">false</span>)<span class="text-primary-main">;</span></span>`,

  `<br />`,

  `<span class="pl-5"> <span class="text-primary-main">const </span>{ connect, isLoading } = <span class="text-secondary-main">useConnect</span>()<span class="text-primary-main">;</span></span>`,

  `<br />`,
  `<br />`,

  `<span class="pl-5"><span class="text-secondary-main">useEffect</span>(() => {</span>
        <br />
        <span class="pl-8">store.<span class="text-secondary-main">getSupportedChains</span>()</span><span class="text-primary-main">;</span>
          <br />
        <span class="pl-5">}, [ ])<span class="text-primary-main">;</span></span>`,

  `<br />`,
  `<br />`,

  `<span class="pl-5"><span class="text-primary-main">const </span><span class="text-secondary-main">handleConnect</span> = <span class="text-primary-main">async</span> (connector: Connector) => {</span>
      <br />
        <span class="text-secondary-main pl-8">setShowWallets</span>(true)<span class="text-primary-main">;</span>
      <br />
        <span class="text-primary-main pl-8">await</span> <span class="text-secondary-main">connect</span>(connector)<span class="text-primary-main">;</span>
        <br />
      <span class="pl-5">}</span><span class="text-primary-main">;</span>`,

  `<br />`,
  `<br />`,

  `<span class="text-primary-main">return</span>`,
  ` (`,

  `<br />`,
  `<span class="pl-4"></span>`,

  `<`,
  `<span class="text-secondary-main">button</span>`,
  ` onClick`,

  `<span class="text-custom-green">=</span>`,
  `{`,
  `<span class="text-secondary-main">handleConnect</span>`,
  `}`,

  `>`,
  `Connect Wallet`,
  `</`,
  `<span class="text-secondary-main">button</span>`,
  `>`,

  `<br />`,

  `)`,
  `<span class="text-primary-main">;</span>`,
  `<br />`,
  `<br />`,
  `<span class="text-primary-main">export default <i class="text-custom-blue font-bold">WalletConnect</i>;</span>`,
];

export default typingText;
