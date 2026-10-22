import Link from "next/link";

export default function Button({ href, children, variant = "primary", external = false, ...rest }) {
  const cls = `btn btn-${variant}`;
  if (external) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  if (href) return <Link href={href} className={cls} {...rest}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
