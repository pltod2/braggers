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
  { href: '/', text: 'Home' },
  { href: '/users', text: 'Users' },
  { href: '/account', text: 'Account' },
  { href: '/forum', text: 'Forum' },
  { href: '/sign-off', text: 'Sign Off' }
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