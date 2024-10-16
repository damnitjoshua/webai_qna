"use client";
import React, { useState } from "react";
import { askLLM } from "../actions";

export default function QnaComponent() {
	const [query, setQuery] = useState<string>("");
	const [answer, setAnswer] = useState<string>("");
	const [isSearching, setIsSearching] = useState<boolean>(false);

	async function getAnswer() {
		try {
			if (!query || query === "") {
				return;
			}

			setIsSearching(true);

			const context =
				"APU Data Science Week 2024 is a dynamic event, held from October 15 to 17, 2024, hosted by Asia Pacific University of Technology & Innovation (APU). The event features expert talks, workshops, hackathons, and networking sessions. A key highlight is the workshop 'Implementing AI in Web Projects Using Cloudflare and Next.js,' led by Joshua Chew Jay Han, a 3rd Year AI Major at Universiti Malaya and President of its Startup Community. With experience in web development, computer vision (CV), IoT, and international work across Japan, Taiwan, Mainland China, and Malaysia, Joshua will share insights on integrating AI into web projects. Participants will gain practical skills and learn how to deploy AI-driven solutions using modern technologies like Cloudflare and Next.js.";

			const ans: any = await askLLM(context, query);
			setAnswer(`${ans.result.response}`);
			setIsSearching(false);
		} catch (error) {
			console.log(error);
			setIsSearching(false);
		}
	}

	return (
		<div className="flex flex-col space-y-4">
			<textarea
				placeholder="query"
				onChange={(event) => {
					setQuery(event.currentTarget.value);
					setAnswer("Ask a question");
				}}
				disabled={isSearching}
				className="border border-black rounded-md p-4 disabled:opacity-10"
			/>
			<button
				onClick={getAnswer}
				disabled={isSearching}
				className="bg-black text-white p-2 rounded-md hover:opacity-85 disabled:opacity-10">
				Ask
			</button>
			<p className="p-4 rounded-md bg-purple-200">{isSearching ? "Searching..." : answer}</p>
		</div>
	);
}
