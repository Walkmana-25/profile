import { Provider } from '../src/components/ui/provider'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Provider>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px' }}>
        <nav style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
        </nav>
        {children}
      </div>
    </Provider>
  )
}
