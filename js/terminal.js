function initTerminal() {
    const c = document.getElementById('terminal-content');
    if (!c) return;
    const lines = [
        { text: 'fetch --profile suanaph --verbose', type: 'cmd' },
        { text: 'Loading profile · MacBook Air M3 · Bangkok, TH', type: 'out' },
        { text: '', type: 'blank' },
        { text: '▸ IE-minded Developer', type: 'fact' },
        { text: '  ผสมผสาน Process Optimization เข้ากับ Software — ลด waste ได้จริง', type: 'fact' },
        { text: '▸ Hackintosh Engineer since mid-2021 · 4 Builds Completed', type: 'fact' },
        { text: '  OptiPlex 5060 · R5 2600 (B450M) · MateBook D15 · Inspiron 3567', type: 'fact' },
        { text: '▸ Self-Taught · Swift · Python · Google Apps Script · ACPI Patching', type: 'fact' },
        { text: '▸ Retro Modder · iPod Classic 5.5 (Rockbox) · iPod Touch 6', type: 'fact' },
        { text: '', type: 'blank' },
        { text: 'git log --oneline', type: 'cmd' },
        { text: 'a1b2c3d  Zenist Phase 1 — MediaRemote integration', type: 'out' },
        { text: 'e4f5g6h  SiS YouTube Downloader V2.0 release', type: 'out' },
        { text: 'i7j8k9l  KVS Automation System — Google Apps Script', type: 'out' },
        { text: 'm0n1o2p  TSP Full Project — VBA Route Optimizer', type: 'out' },
        { text: '', type: 'blank' },
        { text: 'status --current', type: 'cmd' },
        { text: 'ACTIVE — Open to new challenges. <span class="cursor"></span>', type: 'success' },
    ];
    let i = 0;
    function next() {
        if (i >= lines.length) return;
        const { text, type } = lines[i];
        if (type === 'blank') { c.appendChild(document.createElement('br')); i++; setTimeout(next, 90); return; }
        const s = document.createElement('span');
        s.className = 't-line t-' + type;
        s.innerHTML = text;
        c.appendChild(s);
        c.appendChild(document.createElement('br'));
        i++;
        setTimeout(next, type === 'cmd' ? 620 : type === 'out' ? 280 : 220);
    }
    next();
}
