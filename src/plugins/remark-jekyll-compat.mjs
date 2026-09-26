export default function remarkJekyllCompat() {
  const donationBox = `
<div class="my-8 p-6 rounded-2xl glass-card border border-brand-200/80 bg-gradient-to-r from-brand-50/60 to-sky-50/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 not-prose">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-600 flex items-center justify-center text-xl shrink-0">
      <i class="fa-solid fa-heart text-rose-500"></i>
    </div>
    <div>
      <h4 class="font-bold text-slate-900 text-base m-0">Support LibreELEC Development</h4>
      <p class="text-xs text-slate-600 mt-1 mb-0">We are 100% community supported. Your contribution helps fund build infrastructure and test devices.</p>
    </div>
  </div>
  <a href="https://opencollective.com/libreelec/donate" target="_blank" rel="noopener" class="shrink-0 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/20 hover:shadow-brand-500/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 no-underline">
    <i class="fa-solid fa-gift"></i> Donate on OpenCollective
  </a>
</div>`;

  const isSupportTag = (str) => {
    if (!str) return false;
    const s = str.trim();
    return (
      s === '{% include paypal.html %}' ||
      s === '{% include opencollective.html %}' ||
      s === '{% include support.html %}' ||
      s.includes('{% include paypal.html %}') ||
      s.includes('{% include opencollective.html %}') ||
      s.includes('{% include support.html %}') ||
      /^<SupportBlock\s*\/>$/i.test(s) ||
      /^<support-block\s*(\/>|><\/support-block>)$/i.test(s) ||
      s.includes('<SupportBlock') ||
      s.includes('<support-block')
    );
  };

  return (tree) => {
    function traverse(node) {
      if (!node) return;

      if (node.type === 'text' || node.type === 'html' || node.type === 'raw') {
        if (node.value) {
          node.value = node.value.replace(/\{\{\s*site\.baseurl\s*\}\}/g, '');
        }
      }

      if (node.children && Array.isArray(node.children)) {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];

          if (child.type === 'html' || child.type === 'raw') {
            if (isSupportTag(child.value)) {
              node.children[i] = {
                type: 'html',
                value: donationBox
              };
              continue;
            }
          }

          if (child.type === 'paragraph' && child.children) {
            const rawText = child.children.map((c) => c.value || '').join('').trim();
            if (isSupportTag(rawText)) {
              node.children[i] = {
                type: 'html',
                value: donationBox
              };
              continue;
            }
          }

          traverse(child);
        }
      }
    }

    traverse(tree);
  };
}
