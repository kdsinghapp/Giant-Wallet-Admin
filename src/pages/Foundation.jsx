import React, { useState } from "react";

const initialCampaignsData = [
	{
		_id: "68c7ee4bc6601be1b4859f2a",
		foundation: "68bffbce17d798a03f456be4",
		title: "Run for the Tigersssss",
		description: "A charity marathon to raise awareness and funds for tiger conservation.",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3buIA2kSsEewzGiolevApayuKS7hzkQV3Q&s",
		raisedAmount: 0,
		eventDate: "March 3, 2025",
		location: "It partk indore",
		participants: [
			{
				_id: "68bbdc63f6f6a065c1b5d166",
				fullName: "deepak",
				avatar: "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
			},
			{
				_id: "68bbfb0febbe5c019e1282a0",
				fullName: "palash",
				avatar: "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
			}
		],
		status: "active",
		foundationName: " save tiger foundation,"
	},
	// ...other campaigns from user data
];

const Foundation = () => {
	const [campaigns, setCampaigns] = useState(initialCampaignsData);
	const [form, setForm] = useState({
		title: "",
		description: "",
		eventDate: "",
		location: "",
		image: "",
	});
	const [imageFile, setImageFile] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setImageFile(file);
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setForm((prev) => ({ ...prev, image: reader.result }));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.title || !form.description || !form.eventDate || !form.location || !form.image) return;
		setCampaigns([
			{
				_id: Date.now().toString(),
				...form,
				foundationName: "Custom Foundation",
				raisedAmount: 0,
				participants: [],
				status: "active",
			},
			...campaigns,
		]);
		setForm({ title: "", description: "", eventDate: "", location: "", image: "" });
		setImageFile(null);
	};

	return (
		<div>
			<h2>Foundation Campaigns</h2>
			{/* Add Campaign Form */}
			<div style={{ marginBottom: "32px", padding: "20px", background: "#f4f6fb", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
				<h3 style={{ marginBottom: "16px" }}>Add Campaign</h3>
				<form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={form.title}
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
						type="text"
						name="eventDate"
						placeholder="Event Date"
						value={form.eventDate}
						onChange={handleChange}
						style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flex: "1 1 180px" }}
						required
					/>
					<input
						type="text"
						name="location"
						placeholder="Location"
						value={form.location}
						onChange={handleChange}
						style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flex: "1 1 180px" }}
						required
					/>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						style={{ flex: "1 1 180px" }}
						required
					/>
					<button type="submit" style={{ padding: "10px 24px", borderRadius: "4px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
						Add Campaign
					</button>
				</form>
				{form.image && (
					<div style={{ marginTop: "12px" }}>
						<img src={form.image} alt="Preview" style={{ height: "60px", borderRadius: "4px" }} />
					</div>
				)}
			</div>
			{/* Campaign List */}
			<div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
				{campaigns.map((campaign) => (
					<div
						key={campaign._id}
						style={{
							border: "1px solid #ddd",
							borderRadius: "8px",
							padding: "16px",
							width: "300px",
							background: "#fff",
							boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
						}}
					>
						<img
							src={campaign.image}
							alt={campaign.title}
							style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }}
						/>
						<h3 style={{ margin: "12px 0 6px" }}>{campaign.title}</h3>
						<p style={{ color: "#555", fontSize: "14px" }}>{campaign.description}</p>
						<div style={{ fontSize: "13px", color: "#888" }}>
							<strong>Date:</strong> {campaign.eventDate}<br />
							<strong>Location:</strong> {campaign.location}
						</div>
						<div style={{ marginTop: "8px", fontSize: "13px", color: "#888" }}>
							<strong>Foundation:</strong> {campaign.foundationName}
						</div>
						<div style={{ marginTop: "8px", fontSize: "13px", color: "#888" }}>
							<strong>Participants:</strong> {campaign.participants?.length || 0}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Foundation;
