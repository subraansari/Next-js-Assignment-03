import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/footer";
import Management from "./components/Management";
import Customize from "./components/customize";
import Customize2 from "./components/customize2";
import Work from "./components/work";
import Sponsors from "./components/sponsors";
export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Management />
			<Customize />
			<Customize2 />
			<Work />
			<Sponsors />
			<Footer />
		</div>
	);
}