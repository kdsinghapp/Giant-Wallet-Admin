
import React, { useState } from "react";

const initialCharitiesData = [
	{
		_id: "68bffbce17d798a03f456be4",
		name: "save tiger foundation,",
		description: "to save the national and precious animal india",
		logo: "https://api.gwment.com/api/v1/foundation/logo/1757412302412-Hero.png",
		website: "http://localhost:9000",
	},
	{
		_id: "68bffc300a35176b822e8415",
		name: "save tiger foundation,",
		description: "to save the national and precious animal india",
		logo: "https://api.gwment.com/api/v1/foundation/logo/1757412400625-Hero.png",
		website: "http://localhost:9000",
	},
	{
		_id: "68bffd5c194addabe3bb8c42",
		name: "save tiger foundation,",
		description: "to save the national and precious animal india",
		logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3buIA2kSsEewzGiolevApayuKS7hzkQV3Q&s",
		website: "http://localhost:9000",
	},
	{
		_id: "68bffd6108797df80dd083d9",
		name: "save tiger foundation,",
		description: "to save the national and precious animal india",
		logo: "https://api.gwment.com/api/v1/foundation/logo/1757412703141-Hero.png",
		website: "http://localhost:9000",
	},
	{
		_id: "68c008310a35176b822e842d",
		name: "save tiger foundation,",
		description: "to save the national and precious animal india",
		logo: "https://api.gwment.com/api/v1/foundation/logo/1757415473095-Hero.png",
		website: "http://localhost:9000",
	},
	{
		_id: "68c02b67a1a900b5787710f5",
		name: "save tiger foundation,",
		description: "to save the national and precious animal india",
		logo: "https://api.gwment.com/api/v1/foundation/logo/1757424487314-kompass-save-tigers.jpg",
		website: "http://localhost:9000",
	},
	{
		_id: "68c02bb97af0839d944f91d7",
		name: "save tiger foundation,",
		description: "to save the national and precious animal india",
		logo: "https://api.gwment.com/api/v1/foundation/logo/1757424568932-kompass-save-tigers.jpg",
		website: "http://localhost:9000",
	},
	{
		_id: "68c02be37af0839d944f91db",
		name: "save tiger foundation,",
		description: "to save the national and precious animal india",
		logo: "https://api.gwment.com/api/v1/foundation/logo/1757424611422-Hero.png",
		website: "http://localhost:9000",
	},
	{
		_id: "68c7e7767af0839d944f9233",
		name: "save tiger foundation,",
		description: "to save the national and precious animal india",
		logo: "https://api.gwment.com/api/v1/foundation/logo/1757931382582-EventImage.jpg",
		website: "http://localhost:9000",
	},
	{
		_id: "68cbab3f86ac1fddb872987e",
		name: "Church foundation,",
		description: "for the needy peoples",
		logo: "https://api.gwment.com/api/v1/foundation/logo/1758178111177-6c7181b4-4926-4d08-a3bd-362e7cb78bbb.jpg",
		website: "http://localhost:9000",
	},
];

const Charities = () => {
	const [charities, setCharities] = useState(initialCharitiesData);
	const [form, setForm] = useState({
		name: "",
		description: "",
		website: "",
		logo: "",
	});
	const [logoFile, setLogoFile] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleLogoChange = (e) => {
		const file = e.target.files[0];
		setLogoFile(file);
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setForm((prev) => ({ ...prev, logo: reader.result }));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.description || !form.website || !form.logo) return;
		setCharities([
			{
				_id: Date.now().toString(),
				...form,
			},
			...charities,
		]);
		setForm({ name: "", description: "", website: "", logo: "" });
		setLogoFile(null);
	};

	return (
		<div>
			<h2>Charities</h2>
			{/* Add Charity Form */}
			<div style={{ marginBottom: "32px", padding: "20px", background: "#f4f6fb", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
				<h3 style={{ marginBottom: "16px" }}>Add Charity</h3>
				<form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={form.name}
						onChange={handleChange}
						style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flex: "1 1 180px" }}
						required
					/>
					<input
						type="text"
						name="description"
						placeholder="Description"
						value={form.description}
						onChange={handleChange}
						style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flex: "2 1 280px" }}
						required
					/>
					<input
						type="url"
						name="website"
						placeholder="Website"
						value={form.website}
						onChange={handleChange}
						style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flex: "1 1 180px" }}
						required
					/>
					<input
						type="file"
						accept="image/*"
						onChange={handleLogoChange}
						style={{ flex: "1 1 180px" }}
						required
					/>
					<button type="submit" style={{ padding: "10px 24px", borderRadius: "4px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
						Add Charity
					</button>
				</form>
				{form.logo && (
					<div style={{ marginTop: "12px" }}>
						<img src={form.logo} alt="Preview" style={{ height: "60px", borderRadius: "4px" }} />
					</div>
				)}
			</div>
			{/* Charity List */}
			<div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
				{charities.map((charity) => (
					<div
						key={charity._id}
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
							src={charity.logo}
							alt={charity.name}
							style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }}
						/>
						<h3 style={{ margin: "12px 0 6px" }}>{charity.name}</h3>
						<p style={{ color: "#555", fontSize: "14px" }}>{charity.description}</p>
						<a href={charity.website} target="_blank" rel="noopener noreferrer" style={{ color: "#007bff" }}>
							Visit Website
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Charities;