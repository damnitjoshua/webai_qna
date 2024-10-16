"use server";

export async function askLLM(context: string, query: string) {
	try {
		const res = await fetch(
			`https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACC_ID}/ai/run/@hf/mistral/mistral-7b-instruct-v0.2`,
			{
				headers: {
					Authorization: `Bearer ${process.env.CF_API_TOKEN}`,
					"Content-Type": "application/x-www-form-urlencoded",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
					"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
					"Access-Control-Max-Age": "86400",
				},
				method: "POST",
				cache: "no-store",
				body: JSON.stringify({
					prompt: `<s>[INST]Role: You are a QnA Bot for APU. Context: ${context}. Rule: Reply in a short sentence and avoid offensive statements. Avoid answering if you don't know. [/INST]</s>\n[INST]${query}[/INST]`,
					raw: true,
					// max_tokens: 100,
					stream: false,
				}),
			}
		);

		return res.json();
	} catch (error) {
		console.log(error);
	}
}
