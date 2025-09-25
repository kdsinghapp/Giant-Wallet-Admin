
import React, { useState } from "react";


const BannerAndNews = () => {
	const [form, setForm] = useState({ name: "", desc: "", img: "" });
	const [imgFile, setImgFile] = useState(null);
	const [banners, setBanners] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleImgChange = (e) => {
		const file = e.target.files[0];
		setImgFile(file);
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setForm((prev) => ({ ...prev, img: reader.result }));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.desc || !form.img) return;
		setBanners([
			{
				_id: Date.now().toString(),
				...form,
			},
			...banners,
		]);
		setForm({ name: "", desc: "", img: "" });
		setImgFile(null);
	};

	return (
		<div className="container mt-4">
			<h2>Banners & News</h2>
			{/* Add Banner Form */}
			<div style={{ marginBottom: "32px", padding: "20px", background: "#f4f6fb", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
				<h3 style={{ marginBottom: "16px" }}>Add Banner</h3>
				<form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
					<input
						type="text"
						name="name"
						placeholder="Banner Name"
						value={form.name}
						onChange={handleChange}
						style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flex: "1 1 180px" }}
						required
					/>
					<input
						type="text"
						name="desc"
						placeholder="Description"
						value={form.desc}
						onChange={handleChange}
						style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flex: "2 1 280px" }}
						required
					/>
					<input
						type="file"
						accept="image/*"
						onChange={handleImgChange}
						style={{ flex: "1 1 180px" }}
						required
					/>
					<button type="submit" style={{ padding: "10px 24px", borderRadius: "4px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
						Add Banner
					</button>
				</form>
				{form.img && (
					<div style={{ marginTop: "12px" }}>
						<img src={form.img} alt="Preview" style={{ height: "60px", borderRadius: "4px" }} />
					</div>
				)}
			</div>
			{/* Banner List */}
			<div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
				{banners.length === 0 ? (
					<p>No banners available.</p>
				) : (
					banners.map((banner) => (
						<div
							key={banner._id}
							style={{
								border: "1px solid #ddd",
								borderRadius: "8px",
								padding: "16px",
								width: "260px",
								background: "#fff",
								boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
							}}
						>
							<img
								src={banner.img}
								alt={banner.name}
								style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }}
							/>
							<h3 style={{ margin: "12px 0 6px" }}>{banner.name}</h3>
							<p style={{ color: "#555", fontSize: "14px" }}>{banner.desc}</p>
						</div>
					))
				)}
			</div>
			{/* News Section (unchanged) */}
			<div className="row mt-4">
				<div className="col-md-12">
					<div className="card mb-4">
						<div className="card-header">News</div>
						<div className="card-body">
							{/* Add news items here */}
							<ul>
								<li>No news available.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerAndNews;