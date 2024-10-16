import Image from "next/image";
import { askLLM } from "./actions";
import { useState } from "react";
import QnaComponent from "./components/QnaComponent";

export default function Home() {
  
  
	return (
		<div className="space-y-4 px-4">
			<section>
				<h1 className="text-3xl font-bold py-2">APU Data Science Week</h1>
				<p>
					APU Data Science Week 2024 is a dynamic event from October 15 to 17, 2024, hosted by Asia Pacific University of
					Technology & Innovation (APU), featuring expert talks, workshops, hackathons, and networking sessions. A key highlight
					is the workshop "Implementing AI in Web Projects Using Cloudflare and Next.js" led by Joshua Chew Jay Han, a
					3rd Year AI Major at Universiti Malaya and President of its Startup Community. With experience in web development, CV,
					IoT, and international work across Japan, Taiwan, Mainland China, and Malaysia, Joshua will share insights on
					integrating AI into web projects. Participants will gain practical skills and learn how to deploy AI-driven solutions
					using modern technologies like Cloudflare and Next.js.
				</p>
			</section>
			<section>
				<QnaComponent />
			</section>
		</div>
	);
}
