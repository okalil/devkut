import NextLink from 'next/link'

export function Link({ href, styled, children, ...props }) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}
