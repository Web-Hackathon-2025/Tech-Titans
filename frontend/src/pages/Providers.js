// Providers Page: lists provider categories and loads providers from backend
export function Providers() {
	return `
		<section style="padding:2rem;">
			<h2 style="color:#0a192f;">Become a Provider</h2>
			<p>Join Karigar and offer your services to customers near you.</p>

			<div id="providers-list" style="margin-top:1rem; display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem;"></div>
		</section>
	`;
}

export async function initProviders() {
	const root = document.querySelector('#providers-list');
	if (!root) return;
	root.innerHTML = '<div>Loading providers...</div>';
	try {
		const res = await fetch('/api/providers');
		if (!res.ok) throw new Error('Failed to load providers');
		const data = await res.json();
		root.innerHTML = data.map(p => `
			<div style="background:#fff;border:1px solid #e8eee7;border-radius:12px;padding:1rem;box-shadow:0 2px 12px rgba(20,33,61,0.05)">
				<div style="font-weight:800;color:#2d5016">${p.name}</div>
				<div style="color:#425077">${p.category} • ${p.city}</div>
				<div style="margin-top:0.4rem;color:#666">Rating: ${p.rating ?? 'N/A'}</div>
			</div>
		`).join('');
	} catch (err) {
		root.innerHTML = `<div style="color:#b00020">${err.message}</div>`;
		console.error(err);
	}
}
// Providers Page: lists provider categories and loads providers from backend\nexport function Providers() {\n    return `\n        <section style="padding:2rem;">\n            <h2 style="color:#0a192f;">Become a Provider</h2>\n            <p>Join Karigar and offer your services to customers near you.</p>\n\n            <div id="providers-list" style="margin-top:1rem; display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem;"></div>\n        </section>\n    `;\n}\n\nexport async function initProviders() {\n    const root = document.querySelector('#providers-list');\n    if (!root) return;\n    root.innerHTML = '<div>Loading providers...</div>';\n    try {\n        const res = await fetch('/api/providers');\n        if (!res.ok) throw new Error('Failed to load providers');\n        const data = await res.json();\n        root.innerHTML = data.map(p => `\n            <div style=\"background:#fff;border:1px solid #e8eee7;border-radius:12px;padding:1rem;box-shadow:0 2px 12px rgba(20,33,61,0.05)\">\n                <div style=\"font-weight:800;color:#2d5016\">${p.name}</div>\n                <div style=\"color:#425077\">${p.category} • ${p.city}</div>\n                <div style=\"margin-top:0.4rem;color:#666\">Rating: ${p.rating ?? 'N/A'}</div>\n            </div>\n        `).join('');\n    } catch (err) {\n        root.innerHTML = `<div style=\"color:#b00020\">${err.message}</div>`;\n        console.error(err);\n    }\n}\n