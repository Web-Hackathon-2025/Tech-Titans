// About Page: simple info fetched from backend
export function About() {
	return `
		<section style="padding:2rem;">
			<h2 style="color:#0a192f;">About Karigar</h2>
			<p>We connect customers with verified local service providers.</p>
			<div id="about-info" style="margin-top:1rem;">Loading...</div>
		</section>
	`;
}

export async function initAbout() {
	const el = document.querySelector('#about-info');
	if (!el) return;
	try {
		const res = await fetch('/api/info');
		if (!res.ok) throw new Error('Failed to load info');
		const info = await res.json();
		el.innerHTML = `
			<div style="background:#fff;border:1px solid #e8eee7;border-radius:12px;padding:1rem;box-shadow:0 2px 12px rgba(20,33,61,0.05)">
				<div><strong>Version:</strong> ${info.version}</div>
				<div><strong>Region:</strong> ${info.region}</div>
				<div><strong>Services:</strong> ${info.services.join(', ')}</div>
			</div>
		`;
	} catch (err) {
		el.textContent = err.message;
		console.error(err);
	}
}
// About Page: simple info fetched from backend\nexport function About() {\n    return `\n        <section style="padding:2rem;">\n            <h2 style="color:#0a192f;">About Karigar</h2>\n            <p>We connect customers with verified local service providers.</p>\n            <div id="about-info" style="margin-top:1rem;">Loading...</div>\n        </section>\n    `;\n}\n\nexport async function initAbout() {\n    const el = document.querySelector('#about-info');\n    if (!el) return;\n    try {\n        const res = await fetch('/api/info');\n        if (!res.ok) throw new Error('Failed to load info');\n        const info = await res.json();\n        el.innerHTML = `\n            <div style=\"background:#fff;border:1px solid #e8eee7;border-radius:12px;padding:1rem;box-shadow:0 2px 12px rgba(20,33,61,0.05)\">\n                <div><strong>Version:</strong> ${info.version}</div>\n                <div><strong>Region:</strong> ${info.region}</div>\n                <div><strong>Services:</strong> ${info.services.join(', ')}</div>\n            </div>\n        `;\n    } catch (err) {\n        el.textContent = err.message;\n        console.error(err);\n    }\n}\n