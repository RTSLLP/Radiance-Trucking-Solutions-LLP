"use client"

import { useState } from "react"
import Link from "next/link"
import {
  CreditCard,
  Check,
  AlertTriangle,
  Clock,
  ArrowLeft,
  Building2,
  Truck,
  ShieldCheck,
  Download,
  DollarSign,
  ArrowUpRight,
  Info,
} from "lucide-react"

interface Invoice {
  id: string
  invoiceNumber: string
  period: string
  baseAmountCAD: number
  dueDate: string // YYYY-MM-DD
  status: "paid" | "pending"
  paidDate?: string
}

// Mock initial data representing real operational invoices
const initialInvoices: Invoice[] = [
  {
    id: "inv-3",
    invoiceNumber: "RTS-2026-104",
    period: "Oct 01 - Oct 07, 2026 (Dispatch & Back-Office)",
    baseAmountCAD: 450.0,
    dueDate: "2026-10-18", // Future due date
    status: "pending",
  },
  {
    id: "inv-2",
    invoiceNumber: "RTS-2026-098",
    period: "Sep 15 - Sep 21, 2026 (Full Operations Desk)",
    baseAmountCAD: 500.0,
    dueDate: "2026-09-30", // Overdue date
    status: "pending",
  },
  {
    id: "inv-1",
    invoiceNumber: "RTS-2026-089",
    period: "Sep 01 - Sep 07, 2026 (Dispatch Support)",
    baseAmountCAD: 450.0,
    dueDate: "2026-09-15",
    status: "paid",
    paidDate: "2026-09-14",
  },
]

export function calculateLatePenalty(baseAmount: number, dueDateStr: string): {
  isOverdue: boolean
  daysOverdue: number
  penaltyAmount: number
  totalDue: number
} {
  const today = new Date()
  const due = new Date(dueDateStr)
  const diffTime = today.getTime() - due.getTime()
  const daysOverdue = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (daysOverdue > 0) {
    // 2% monthly late fee per TOS v2.2
    const penaltyRate = 0.02
    const penaltyAmount = Number((baseAmount * penaltyRate).toFixed(2))
    return {
      isOverdue: true,
      daysOverdue,
      penaltyAmount,
      totalDue: Number((baseAmount + penaltyAmount).toFixed(2)),
    }
  }

  return {
    isOverdue: false,
    daysOverdue: 0,
    penaltyAmount: 0,
    totalDue: baseAmount,
  }
}

export default function CarrierAccountPage() {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const handlePayClick = (inv: Invoice) => {
    setSelectedInvoice(inv)
    setShowPaymentModal(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Back Link */}
        <Link
          href="/portal"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#0D183D] mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Partner Hub</span>
        </Link>

        {/* Header */}
        <div className="rounded-3xl bg-[#060B18] text-white p-8 sm:p-10 border border-white/10 mb-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Settlement &amp; Statement Vault</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Carrier Invoices &amp; <span className="text-[#FF1E2D]">Account</span>
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Real-time statement reconciliation, automated late penalty auditing, and Canadian B2B payment instructions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-right hidden sm:block">
            <span className="text-xs text-slate-400 font-mono block">CURRENCY BASE</span>
            <span className="text-xl font-black text-white font-mono">CAD ($)</span>
          </div>
        </div>

        {/* Section 1: Carrier Profile Scope (What RTS Provides vs What Carrier Provides) */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-8">
          <h2 className="text-lg font-black text-[#0D183D] mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#FF1E2D]" />
            <span>Active Partnership Operational Profile</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Left: What RTS Provides */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF1E2D]">
                Services Delivered By RTS
              </span>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Dedicated Trip Coordination &amp; Spot Rate Negotiation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>24/7 Driver Check-Calls &amp; Appointment Scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Immediate POD Archiving &amp; Broker Invoicing Preparation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Factoring Notice-of-Assignment (NOA) Reconciliations</span>
                </li>
              </ul>
            </div>

            {/* Right: What Carrier Provides */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D183D]">
                Equipment &amp; Authority On Record
              </span>
              <div className="space-y-2 text-xs text-slate-700 font-mono">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500 font-sans">Active Power Units:</span>
                  <span className="font-bold text-slate-900">3x Semi-Tractors</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500 font-sans">Trailers In Fleet:</span>
                  <span className="font-bold text-slate-900">53&apos; Dry Van &amp; Reefer</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500 font-sans">Operating Authority:</span>
                  <span className="font-bold text-emerald-600">CVOR / NSC Verified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">Kitchener Operations Desk:</span>
                  <span className="font-bold text-[#FF1E2D]">Desk #01 (Active)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Invoice Ledger with Automated Late Penalty Engine */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-6">
            <div>
              <h2 className="text-xl font-black text-[#0D183D]">Statement &amp; Invoice Ledger</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Past-due invoices automatically calculate late penalty interest pursuant to Master Terms v2.2.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-slate-400">
              AUTO-PENALTY ENGINE: ACTIVE
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="pb-3">Invoice #</th>
                  <th className="pb-3">Service Period</th>
                  <th className="pb-3">Base (CAD)</th>
                  <th className="pb-3">Due Date</th>
                  <th className="pb-3">Penalty Status</th>
                  <th className="pb-3">Total Payable</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {initialInvoices.map((inv) => {
                  const penaltyInfo =
                    inv.status === "pending"
                      ? calculateLatePenalty(inv.baseAmountCAD, inv.dueDate)
                      : { isOverdue: false, daysOverdue: 0, penaltyAmount: 0, totalDue: inv.baseAmountCAD }

                  return (
                    <tr key={inv.id} className="hover:bg-slate-50/70 transition">
                      <td className="py-4 font-mono font-bold text-slate-900">
                        {inv.invoiceNumber}
                      </td>
                      <td className="py-4 text-slate-700 max-w-xs">{inv.period}</td>
                      <td className="py-4 font-mono font-bold text-slate-800">
                        ${inv.baseAmountCAD.toFixed(2)}
                      </td>
                      <td className="py-4 text-slate-600">{inv.dueDate}</td>
                      <td className="py-4">
                        {inv.status === "paid" ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                            <Check className="w-3.5 h-3.5" />
                            <span>Paid</span>
                          </span>
                        ) : penaltyInfo.isOverdue ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700 border border-amber-200">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                            <span>{penaltyInfo.daysOverdue}d Past Due (+${penaltyInfo.penaltyAmount})</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Due On Schedule</span>
                          </span>
                        )}
                      </td>
                      <td className="py-4 font-mono font-extrabold text-sm">
                        {inv.status === "paid" ? (
                          <span className="text-slate-400 line-through">
                            ${inv.baseAmountCAD.toFixed(2)}
                          </span>
                        ) : penaltyInfo.isOverdue ? (
                          <span className="text-[#FF1E2D]">
                            ${penaltyInfo.totalDue.toFixed(2)}
                          </span>
                        ) : (
                          <span className="text-slate-900">
                            ${penaltyInfo.totalDue.toFixed(2)}
                          </span>
                        )}
                      </td>
                      <td className="py-4 text-right">
                        {inv.status === "paid" ? (
                          <span className="text-[11px] text-slate-400 font-mono">
                            Settled {inv.paidDate}
                          </span>
                        ) : (
                          <button
                            onClick={() => handlePayClick(inv)}
                            className="inline-flex items-center gap-1 rounded-full bg-[#FF1E2D] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c41430] transition shadow-sm"
                          >
                            <span>Pay Now</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Canadian B2B Settlement Instructions Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-[#0D183D]">
            <ShieldCheck className="w-5 h-5 text-[#FF1E2D]" />
            <h3 className="text-lg font-black">Official Canadian Settlement Rails</h3>
          </div>
          <p className="text-xs text-slate-600 mb-6 leading-relaxed">
            Radiance Trucking Solutions LLP accepts direct B2B payments through standard Canadian commercial rails. All disbursements are acknowledged with an official electronic receipt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interac e-Transfer */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Method 1 // Canadian Interac e-Transfer
              </span>
              <p className="text-sm font-bold text-[#0D183D]">
                contactus@radiancetrucking.com
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send direct from your Canadian business banking app (RBC, TD, Scotiabank, BMO, CIBC). Please include your <strong>Invoice #</strong> in the payment notes.
              </p>
            </div>

            {/* Direct EFT / Wire Transfer */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Method 2 // Direct EFT / Bank Transfer
              </span>
              <p className="text-sm font-bold text-[#0D183D]">
                Electronic Funds Transfer (EFT)
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct commercial account deposit rails are provided privately on your detailed invoice statement PDF to maintain institutional security.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && selectedInvoice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Payment Gateway
                  </span>
                  <h3 className="text-xl font-black text-[#0D183D]">
                    Invoice {selectedInvoice.invoiceNumber}
                  </h3>
                </div>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 text-xs font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Amount Breakdown */}
              {(() => {
                const penaltyInfo = calculateLatePenalty(
                  selectedInvoice.baseAmountCAD,
                  selectedInvoice.dueDate
                )
                return (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Base Dispatch Fee:</span>
                      <span className="font-bold text-slate-900">
                        ${selectedInvoice.baseAmountCAD.toFixed(2)} CAD
                      </span>
                    </div>

                    {penaltyInfo.isOverdue && (
                      <div className="flex justify-between text-[#FF1E2D] pt-1 border-t border-slate-200">
                        <span>Late Interest Penalty (2% per TOS):</span>
                        <span className="font-bold">
                          +${penaltyInfo.penaltyAmount.toFixed(2)} CAD
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm font-black text-[#0D183D] pt-2 border-t-2 border-slate-300">
                      <span>Total Amount Payable:</span>
                      <span>${penaltyInfo.totalDue.toFixed(2)} CAD</span>
                    </div>
                  </div>
                )
              })()}

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Settlement Option:
                </p>

                <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50 space-y-1">
                  <p className="text-xs font-bold text-[#0D183D]">
                    Interac e-Transfer (Recommended for Canadian Fleets)
                  </p>
                  <p className="text-xs text-slate-600">
                    Send to: <strong className="text-slate-900">contactus@radiancetrucking.com</strong>
                    <br />
                    Reference: <strong>{selectedInvoice.invoiceNumber}</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="rounded-full border border-slate-300 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-100 transition"
                >
                  Close
                </button>
                <a
                  href={`mailto:contactus@radiancetrucking.com?subject=Payment Confirmation: ${selectedInvoice.invoiceNumber}&body=Please find payment reference for Invoice ${selectedInvoice.invoiceNumber} attached.`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c41430] transition shadow-md"
                >
                  <span>Submit Payment Notice</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
