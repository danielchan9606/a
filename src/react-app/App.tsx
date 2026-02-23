import "./App.css";

function App() {
	return (
		<div className="page">
			<header className="hero">
				<p className="eyebrow">Ramadan in Kuala Lumpur</p>
				<h1>
					The Heart of <span>Raya KL</span>
				</h1>
				<p className="hero-copy">
					The city is alive. The bazaars are full. The mosques glow at night.
					Your room is waiting — quiet, cool, and ready.
				</p>
				<a className="btn btn-primary" href="#book">
					Reserve Your Stay
				</a>
			</header>

			<img
				className="hero-image"
				src="https://api.tryholo.ai/storage/v1/object/public/user-uploads/c9dd0085-f3d3-4105-bdfa-14579590f800/products/1770015435115-w0eipogcwgg.jpg"
				alt="Alami Garden Hotel KL exterior"
			/>

			<section className="split split-highlight">
				<article className="panel panel-purple">
					<p className="panel-label">Outside</p>
					<h2>Jalan TAR. Night Bazaars. The City Pulses.</h2>
					<p>
						Raya shopping at Jalan Tuanku Abdul Halim. Iftar at the bazaar. The
						call to prayer echoing across KL. This is the Ramadan experience you
						came for.
					</p>
				</article>
				<article className="panel panel-green">
					<p className="panel-label">Inside</p>
					<h2>Cool Air. Garden Calm. Your Sanctuary.</h2>
					<p>
						Return to a space designed for rest. Crisp linens, reliable Wi-Fi,
						and a team that ensures your every need is met — quietly and without
						fuss.
					</p>
				</article>
			</section>

			<section className="split room-feature">
				<img
					src="https://api.tryholo.ai/storage/v1/object/public/user-uploads/c9dd0085-f3d3-4105-bdfa-14579590f800/products/1770014481756-fhoccbspdfl.jpg"
					alt="Deluxe Family Room at Alami Garden Hotel"
				/>
				<div className="room-copy">
					<p className="panel-label">Featured Room</p>
					<h2>Deluxe Family Room</h2>
					<p>
						Two Queen beds. Private bathroom. Air conditioning. Flat-screen TV.
						A quiet street view. Designed for families who want space to breathe
						after a full day in the city.
					</p>
					<a className="btn btn-outline" href="#room">
						View Room
					</a>
				</div>
			</section>

			<section className="why">
				<p className="eyebrow purple">Why Alami Garden</p>
				<h2>A stay designed with intention.</h2>
				<div className="benefits">
					<article>
						<h3>Central Location</h3>
						<p>
							Minutes from Jalan TAR, public transport, and KL&apos;s key mosques.
						</p>
					</article>
					<article>
						<h3>Fast, Reliable Wi-Fi</h3>
						<p>
							Stay connected throughout your stay — for work or family updates.
						</p>
					</article>
					<article>
						<h3>Warm Hospitality</h3>
						<p>A team that greets you with care — from check-in to check-out.</p>
					</article>
					<article>
						<h3>Great Value</h3>
						<p>
							Comfortable, modern rooms at a price that makes sense in the city.
						</p>
					</article>
				</div>
			</section>

			<section className="testimonial split">
				<img
					src="https://api.tryholo.ai/storage/v1/object/public/user-uploads/c9dd0085-f3d3-4105-bdfa-14579590f800/products/1771445810899-eeqsi1y1nf4.png"
					alt="Alami Garden Hotel staff"
				/>
				<blockquote>
					<p>
						“We explored Jalan TAR all afternoon. By evening, the room felt like
						a completely different world. Quiet, cool, and exactly what we
						needed.”
					</p>
					<cite>— A Guest, Ramadan 2024</cite>
				</blockquote>
			</section>

			<section className="gallery">
				<img
					src="https://api.tryholo.ai/storage/v1/object/public/user-uploads/c9dd0085-f3d3-4105-bdfa-14579590f800/products/1770015437737-rxqxe8jt2bi.jpg"
					alt="Hotel room"
				/>
				<img
					src="https://api.tryholo.ai/storage/v1/object/public/user-uploads/c9dd0085-f3d3-4105-bdfa-14579590f800/products/1770015439919-06p8d95hdu8.jpg"
					alt="Hotel amenities"
				/>
				<img
					src="https://api.tryholo.ai/storage/v1/object/public/user-uploads/c9dd0085-f3d3-4105-bdfa-14579590f800/products/1770015441986-bdyu1mabstf.jpg"
					alt="Hotel lobby"
				/>
			</section>

			<section className="cta" id="book">
				<p className="eyebrow">This Ramadan</p>
				<h2>
					Be in the heart of it all. <span>Rest at the center of calm.</span>
				</h2>
				<p>
					Rooms fill quickly during Raya season. Book direct for the best
					available rate and a stay that is both well-located and well-designed.
				</p>
				<a className="btn btn-secondary" href="#">
					Book Direct Now
				</a>
			</section>
		</div>
	);
}

export default App;
