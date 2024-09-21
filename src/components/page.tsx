import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery } from "../../tina/__generated__/types";

export const Page = <T extends PageQuery>(props: {
	query: string;
	variables: object;
	data: T;
}) => {
	const { data } = useTina(props);

	return (
		<>
			<h1 data-tina-field={tinaField(data.page, "title")}>{data.page.title}</h1>
			{data.page.body?.map((block) => {
				if (block?.__typename === "PageBodyImage") {
					return (
						<img
							src={block.src}
							alt={block.alt}
							data-tina-field={tinaField(block, "src")}
						/>
					);
				}
				if (block?.__typename === "PageBodyCountdown") {
					return (
						<div data-tina-field={tinaField(block, "end")}>{block.end}</div>
					);
				}
			})}
		</>
	);
};
