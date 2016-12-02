import React, { PropTypes } from 'react'
import Link from 'next/link'
import css from 'next/css'

const styles = {
  header: css({
    display: 'flex',
    marginBottom: 20,
    marginTop: 50
  }),
  link: isActive => css({
    marginRight: 20,
    fontSize: 20,
    color: isActive ? '#333' : '#999',
    textDecoration: 'none',
    textTransform: 'uppercase',
    paddingTop: 2,
    paddingBottom: 2,
    borderTop: `1px solid ${isActive ? '#333' : 'transparent'}`,
    borderBottom: `1px solid ${isActive ? '#333' : 'transparent'}`,
    transition: 'color .25s',
    fontWeight: isActive ? '600' : '400',
    ':hover': {
      color: '#333'
    }
  })
}

const links = [
  { href: '/slide1', text: 'S1' },
  { href: '/slide2', text: 'S2' },
  { href: '/slide3', text: 'S3' },
  { href: '/slide4', text: 'S4' },
  { href: '/slide5', text: 'S5' },
  { href: '/slide6', text: 'S6' },
  { href: '/slide7', text: 'S7' },
  { href: '/slide8', text: 'S8' },
  { href: '/slide9', text: 'S9' },
  { href: '/slide10', text: 'S10' },
  { href: '/index', text: 'S11' }
]


const Menu = ({ currentUrl }) => (
  <section className={styles.header + ' container'}>
    {links.map(l => (
      <Link key={l.href} href={l.href}>
        <a className={styles.link(currentUrl === l.href)}>
          {l.text}
        </a>
      </Link>
    ))}
  </section>
)

Menu.propTypes = {
  currentUrl: PropTypes.string.isRequired
}

export default Menu