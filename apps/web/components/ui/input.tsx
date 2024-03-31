import * as React from "react";

import { cn } from "@/root/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(
	"flex h-[2.625rem] rounded border border-base-button bg-base-input px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-base-label",
	{
		variants: {
			size: {
				default: "w-[12.5rem]",
				fill: "w-full",
				xs: "w-[3.75rem]",
			},
		},

		defaultVariants: {
			size: "default",
		},
	},
);

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
		VariantProps<typeof inputVariants> {
	optional?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, optional, size, type, ...props }, ref) => {
		const classNamesOfVariant = inputVariants({ size });
		const onlyWidthClass = classNamesOfVariant
			.replace(/.*(\bw-[^\s]+)/, "$1")
			.trim();

		return (
			<div className={cn("relative", onlyWidthClass)}>
				{optional && (
					<p
						className={
							"text-base-label text-xs italic absolute right-0 top-0 p-3 text-end"
						}
					>
						Opcional
					</p>
				)}
				<input
					type={type}
					className={cn(inputVariants({ className, size }))}
					ref={ref}
					{...props}
				/>
			</div>
		);
	},
);
Input.displayName = "Input";

export { Input };
