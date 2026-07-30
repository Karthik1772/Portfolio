'use client';

const items = [
  'BUILD: PASSING',
  'SHIPPED: 6 RELEASED PROJECTS',
  'CURRENT: BARRACUDA NETWORKS',
  'STACK: REACT / NEXT.JS / TYPESCRIPT',
  'LOCATION: BENGALURU, IN',
];

export default function StatusStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="border-b border-border overflow-hidden whitespace-nowrap font-mono-brand text-xs text-muted-foreground">
      <div className="status-track inline-flex py-2.5" style={{ animation: 'scroll-left 28s linear infinite' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="px-5 inline-flex items-center gap-2 border-r border-border"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--clr-green)' }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
