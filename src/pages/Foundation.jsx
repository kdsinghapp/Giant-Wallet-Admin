import React, { useEffect, useState } from "react";
import { getFoundations } from "../api/foundation";

const Foundation = () => {
	const [campaigns, setCampaigns] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
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

	useEffect(() => {
		let mounted = true;
		async function load() {
			setLoading(true);
			setError("");
			const res = await getFoundations();
			if (!mounted) return;
			setLoading(false);
			if (res && res.success && Array.isArray(res.data)) {
				// Map foundation API to campaign-like objects used by this page
				const mapped = res.data.map((f) => ({
					_id: f._id,
					title: f.name || "-",
					description: f.description || "",
					eventDate: new Date(f.createdAt).toLocaleDateString(),
					location: f.website || "",
					image: f.logo || "",
					foundationName: f.name || "",
					participants: [],
				}));
				setCampaigns(mapped);
			} else {
				setError(res.message || "Failed to load foundations");
			}
		}
		load();
		return () => {
			mounted = false;
		};
	}, []);

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">Foundation Campaigns</h2>
			{/* Add Campaign Form */}
			<div className="mb-8 p-5 bg-slate-50 rounded-lg shadow-sm">
				<h3 className="text-lg font-medium mb-4">Add Campaign</h3>
				<form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-center">
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={form.title}
						onChange={handleChange}
						className="px-2 py-2 rounded border border-gray-300 flex-1 min-w-[180px]"
						required
					/>
					<input
						type="text"
						name="description"
						placeholder="Description"
						value={form.description}
						onChange={handleChange}
						className="px-2 py-2 rounded border border-gray-300 flex-1 min-w-[280px]"
						required
					/>
					<input
						type="text"
						name="eventDate"
						placeholder="Event Date"
						value={form.eventDate}
						onChange={handleChange}
						className="px-2 py-2 rounded border border-gray-300 flex-1 min-w-[180px]"
						required
					/>
					<input
						type="text"
						name="location"
						placeholder="Location"
						value={form.location}
						onChange={handleChange}
						className="px-2 py-2 rounded border border-gray-300 flex-1 min-w-[180px]"
						required
					/>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						className="flex-1 min-w-[180px]"
						required
					/>
					<button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
						Add Campaign
					</button>
				</form>
				{form.image && (
					<div className="mt-3">
						<img src={form.image} alt="Preview" className="h-14 rounded" />
					</div>
				)}
			</div>
			{/* Campaign List */}
			<div className="flex flex-wrap gap-5">
				{campaigns.map((campaign) => (
					<div
						key={campaign._id}
						className="border border-gray-200 rounded-lg p-4 w-[300px] bg-white shadow-sm"
					>
						<img
							src={campaign.image}
							alt={campaign.title}
							className="w-full h-[120px] object-cover rounded-md"
						/>
						<h3 className="mt-3 mb-1 text-lg font-semibold">{campaign.title}</h3>
						<p className="text-gray-600 text-sm">{campaign.description}</p>
						<div className="text-sm text-gray-500">
							<strong>Date:</strong> {campaign.eventDate}<br />
							<strong>Location:</strong> {campaign.location}
						</div>
						<div className="mt-2 text-sm text-gray-500">
							<strong>Foundation:</strong> {campaign.foundationName}
						</div>
						<div className="mt-2 text-sm text-gray-500">
							<strong>Participants:</strong> {campaign.participants?.length || 0}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Foundation;
