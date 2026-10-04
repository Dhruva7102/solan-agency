import { STANDARD_DEAL } from "@/lib/content";

/** The them-vs-us table: the "we take less" argument in one glance.
 *  Stacked cards on phones, three columns from md up. */
export default function StandardDeal() {
  return (
    <>
      {/* Phones: one card per dimension */}
      <div className="flex flex-col gap-3 md:hidden">
        {STANDARD_DEAL.rows.map((row) => (
          <div key={row.dim} className="card p-5">
            <p className="eyebrow !text-[10px]">{row.dim}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <span className="mr-2 text-[11px] uppercase tracking-wider text-muted/70">
                {STANDARD_DEAL.theirLabel}
              </span>
              {row.them}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              <span className="gold-text mr-2 text-[11px] uppercase tracking-wider">
                {STANDARD_DEAL.ourLabel}
              </span>
              {row.us}
            </p>
          </div>
        ))}
      </div>

      {/* md+: the full table */}
      <div className="card hidden overflow-hidden !p-0 md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-line text-[11px] uppercase tracking-[0.18em]">
              <th scope="col" className="px-6 py-4 font-medium text-muted" />
              <th scope="col" className="px-6 py-4 font-medium text-muted">
                {STANDARD_DEAL.theirLabel}
              </th>
              <th scope="col" className="px-6 py-4">
                <span className="gold-text font-medium">
                  {STANDARD_DEAL.ourLabel}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {STANDARD_DEAL.rows.map((row) => (
              <tr key={row.dim} className="border-b border-line last:border-0">
                <th
                  scope="row"
                  className="w-[18%] px-6 py-5 align-top text-[13px] font-semibold text-ink"
                >
                  {row.dim}
                </th>
                <td className="w-[38%] px-6 py-5 align-top text-sm leading-relaxed text-muted">
                  {row.them}
                </td>
                <td className="px-6 py-5 align-top text-sm leading-relaxed text-ink">
                  {row.us}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
