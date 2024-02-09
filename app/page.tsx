import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: "green" })}>Simplify&nbsp;</h1>
				<h1 className={title()}>
					your crypto ownership experience with our seamless</h1>
				<h1 className={title({ color: "green" })}> Account Abstraction</h1>
				<h1 className={title()}> wallet.</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Passkeys, Social Recovery, Gas Paymaster and more...
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					href={siteConfig.links.twitter}
				>
					<TwitterIcon size={20} />
					Twitter
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.discord}
				>
					<DiscordIcon size={20} />
					Discord
				</Link>
			</div>

		</section>
	);
}
