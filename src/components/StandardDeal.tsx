import { STANDARD_DEAL } from "@/lib/content";
import { AppIcon, GoldCheck } from "./Phone";

/** The them-vs-us comparison as a grouped list: the "we take less" argument
 *  in one glance. One row per dimension on phones, three columns from md up. */
export default function StandardDeal() {
  return (
    <>
      {/* Phones: one grouped row per dimension */}
      <div className="card list overflow-hidden md:hidden">
        {STANDARD_DEAL.rows.map((row) => (
          <div key={row.dim} className="px-5 py-4">
            <p className="text-[15px] font-semibold text-ink">{row.dim}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              <span className="mr-2 text-[10px] font-medium uppercase tracking-[0.22em] text-muted/80">
                {STANDARD_DEAL.theirLabel}
              </span>
              {row.them}
            </p>
            <p className="mt-2 flex gap-2.5 text-[14.5px] leading-relaxed text-ink">
              <GoldCheck />
              <span>{row.us}</span>
            </p>
          </div>
        ))}
      </div>

      {/* md+: the full table */}
      <div className="card hidden overflow-hidden md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="w-[20%] px-6 py-4" />
              <th scope="col" className="w-[36%] px-6 py-4 text-[10.5px] font-medium uppercase tracking-[0.3em] text-muted">
                {STANDARD_DEAL.theirLabel}
              </th>
              <th scope="col" className="bg-[rgba(210,172,97,0.05)] px-6 py-4">
                <span className="flex items-center gap-2.5 text-[10.5px] font-medium uppercase tracking-[0.3em] text-gold">
                  <AppIcon app="astor" size={22} />
                  {STANDARD_DEAL.ourLabel}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {STANDARD_DEAL.rows.map((row) => (
              <tr key={row.dim} className="border-b border-line last:border-0">
                <th scope="row" className="px-6 py-5 align-top text-[15px] font-semibold text-ink">
                  {row.dim}
                </th>
                <td className="px-6 py-5 align-top text-[15px] leading-relaxed text-muted">{row.them}</td>
                <td className="bg-[rgba(210,172,97,0.05)] px-6 py-5 align-top text-[15px] leading-relaxed text-ink">
                  <span className="flex gap-3">
                    <GoldCheck />
                    <span>{row.us}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
