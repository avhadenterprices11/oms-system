"use client";
import svgPaths from "./svg-2bqbmoqszy";

function PageHeader() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <h1 className="text-[30px] font-extrabold text-[#0f172a] tracking-tight">Task Approvals</h1>
        <div className="bg-[#ede9fe] px-3 py-1 rounded-full">
          <span className="text-[#5048e5] text-[12px] font-semibold">Manager View</span>
        </div>
      </div>
      <p className="text-[#64748b] text-[16px]">Tasks pending your review</p>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col gap-1">
      <p className="text-[28px] font-extrabold" style={{ color }}>{value}</p>
      <p className="text-[13px] text-[#64748b] font-medium">{label}</p>
    </div>
  );
}

function Table() {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0]">
      {/* Header */}
      <div 
        className="grid w-full bg-[#f8fafc]" 
        style={{ gridTemplateColumns: TABLE_GRID_TEMPLATE }}
      >
        <GridHeaderCell className="pl-6">Task</GridHeaderCell>
        <GridHeaderCell>Project</GridHeaderCell>
        <GridHeaderCell>Submitted By</GridHeaderCell>
        <GridHeaderCell>Priority</GridHeaderCell>
        <GridHeaderCell>Submitted</GridHeaderCell>
        <GridHeaderCell>Status</GridHeaderCell>
        <GridHeaderCell className="pr-6">Actions</GridHeaderCell>
      </div>

      {/* Body */}
      <div className="flex flex-col">
        <ApprovalsTaskRow 
          task="API endpoint documentation"
          project="API Migration"
          submittedBy="Jordan Lee"
          priority="Medium"
          submitted="2 hrs ago"
          status="Pending Review"
        />
        <ApprovalsTaskRow 
          task="Client dashboard mockup v2"
          project="Client Dashboard"
          submittedBy="Ravi Kumar"
          priority="High"
          submitted="4 hrs ago"
          status="Pending Review"
          avatarColor="linear-gradient(135deg, rgb(147, 197, 253) 0%, rgb(59, 130, 246) 100%)"
          initial="R"
        />
        <ApprovalsTaskRow 
          task="Database backup script"
          project="DevOps Pipeline"
          submittedBy="Marcus Vane"
          priority="Critical"
          submitted="6 hrs ago"
          status="Pending Review"
          avatarColor="linear-gradient(135deg, rgb(252, 165, 165) 0%, rgb(239, 68, 68) 100%)"
          initial="M"
        />
        <ApprovalsTaskRow 
          task="Sprint 24 test report"
          project="Portal v2"
          submittedBy="Jordan Lee"
          priority="Low"
          submitted="Yesterday"
          status="Pending Review"
        />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[150.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Recently Reviewed (5)</p>
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0]">
      {/* Header */}
      <div 
        className="grid w-full bg-[#f8fafc]" 
        style={{ gridTemplateColumns: RECENTLY_REVIEWED_GRID_TEMPLATE }}
      >
        <GridHeaderCell className="pl-6">Task</GridHeaderCell>
        <GridHeaderCell>Project</GridHeaderCell>
        <GridHeaderCell>Submitted By</GridHeaderCell>
        <GridHeaderCell>Status</GridHeaderCell>
        <GridHeaderCell className="pr-6 text-right">Reviewed At</GridHeaderCell>
      </div>

      {/* Body */}
      <div className="flex flex-col">
        <RecentlyReviewedRow 
          task="Onboarding flow wireframes"
          project="Portal v2"
          submittedBy="Ravi Kumar"
          status="Approved"
          reviewedAt="Today, 9:15 AM"
        />
        <RecentlyReviewedRow 
          task="User authentication fix"
          project="Core Engine"
          submittedBy="Jordan Lee"
          status="Approved"
          reviewedAt="Today, 10:30 AM"
        />
        <RecentlyReviewedRow 
          task="Marketing assets v1"
          project="Growth Kit"
          submittedBy="Sarah Chen"
          status="Revision Requested"
          reviewedAt="Yesterday, 4:45 PM"
        />
      </div>
    </div>
  );
}

const TABLE_GRID_TEMPLATE = "minmax(250px, 1.5fr) 130px 150px 100px 110px 130px 220px";
const RECENTLY_REVIEWED_GRID_TEMPLATE = "minmax(250px, 1.5fr) 150px 150px 130px 180px";

function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight whitespace-nowrap ${className}`}>
      {children}
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    High: "bg-[#fee2e2] text-[#b91c1c]",
    Medium: "bg-[#dbeafe] text-[#2563eb]",
    Low: "bg-[#f1f5f9] text-[#64748b]",
    Critical: "bg-[#ffe4e6] text-[#e11d48]",
  };
  return <Badge className={styles[priority] || styles.Medium}>{priority}</Badge>;
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "Pending Review": "bg-[#fef3c7] text-[#d97706]",
    "Approved Today": "bg-[#d1fae5] text-[#059669]",
    "Approved": "bg-[#d1fae5] text-[#047857]",
    "Revision Requested": "bg-[#fee2e2] text-[#b91c1c]",
  };
  return <Badge className={styles[status] || styles["Pending Review"]}>{status}</Badge>;
}

function ProjectBadge({ name }: { name: string }) {
  return (
    <div className="text-[#64748b] text-[12px] font-medium whitespace-nowrap truncate">
      {name}
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex items-center gap-2">
      <button className="bg-[#d1fae5] hover:bg-[#bbf7d0] text-[#047857] px-3 py-1.5 rounded-md text-[12px] font-semibold transition-colors whitespace-nowrap">
        Approve
      </button>
      <button className="bg-[#fef3c7] hover:bg-[#fde68a] text-[#92400e] px-3 py-1.5 rounded-md text-[12px] font-semibold transition-colors whitespace-nowrap">
        Request Revision
      </button>
    </div>
  );
}

function GridHeaderCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-3 py-3 border-b border-[#e2e8f0] ${className}`}>
      <span className="text-[#94a3b8] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}

function GridRow({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div 
      className={`grid w-full items-center border-b border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function ApprovalsTaskRow({ 
  task, 
  project, 
  submittedBy, 
  priority, 
  submitted, 
  status,
  avatarColor = "linear-gradient(135deg, rgb(252, 211, 77) 0%, rgb(245, 158, 11) 100%)",
  initial = "J"
}: {
  task: string;
  project: string;
  submittedBy: string;
  priority: string;
  submitted: string;
  status: string;
  avatarColor?: string;
  initial?: string;
}) {
  return (
    <GridRow style={{ gridTemplateColumns: TABLE_GRID_TEMPLATE }}>
      {/* Task */}
      <div className="px-3 py-4 flex flex-col gap-1 overflow-hidden">
        <span className="text-[#0f172a] text-[13px] font-semibold truncate whitespace-nowrap" title={task}>{task}</span>
        <button className="text-[#5048e5] text-[11px] font-bold text-left hover:underline">+ Expand</button>
      </div>

      {/* Project */}
      <div className="px-3 py-4 overflow-hidden">
        <ProjectBadge name={project} />
      </div>

      {/* Submitted By */}
      <div className="px-3 py-4 flex items-center gap-2 overflow-hidden">
        <div 
          className="size-6 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundImage: avatarColor }}
        >
          <span className="text-white text-[10px] font-bold">{initial}</span>
        </div>
        <span className="text-[#0f172a] text-[13px] font-medium truncate">{submittedBy}</span>
      </div>

      {/* Priority */}
      <div className="px-3 py-4 flex justify-start">
        <PriorityBadge priority={priority} />
      </div>

      {/* Submitted */}
      <div className="px-3 py-4">
        <span className="text-[#0f172a] text-[13px] whitespace-nowrap">{submitted}</span>
      </div>

      {/* Status */}
      <div className="px-3 py-4 flex justify-start">
        <StatusBadge status={status} />
      </div>

      {/* Actions */}
      <div className="px-3 py-4">
        <ActionButtons />
      </div>
    </GridRow>
  );
}

function RecentlyReviewedRow({ 
  task, 
  project, 
  submittedBy, 
  status, 
  reviewedAt 
}: {
  task: string;
  project: string;
  submittedBy: string;
  status: string;
  reviewedAt: string;
}) {
  return (
    <GridRow style={{ gridTemplateColumns: RECENTLY_REVIEWED_GRID_TEMPLATE }}>
      <div className="px-3 py-3 overflow-hidden">
        <span className="text-[#0f172a] text-[13px] font-medium truncate whitespace-nowrap" title={task}>{task}</span>
      </div>
      <div className="px-3 py-3 overflow-hidden">
        <ProjectBadge name={project} />
      </div>
      <div className="px-3 py-3 overflow-hidden">
        <span className="text-[#64748b] text-[13px] truncate">{submittedBy}</span>
      </div>
      <div className="px-3 py-3 flex justify-start">
        <StatusBadge status={status} />
      </div>
      <div className="px-3 py-3 text-right">
        <span className="text-[#94a3b8] text-[13px] whitespace-nowrap">{reviewedAt}</span>
      </div>
    </GridRow>
  );
}

function MainContent() {
  return (
    <div className="flex-1 pb-20" data-name="Main Content">
      <div className="mx-auto px-8 py-8">
        <PageHeader />
        
        <div className="mt-8">
          <StatsOverview />
        </div>

        <div className="mt-12">
          <div className="mb-6">
            <h2 className="text-[18px] font-bold text-[#0f172a]">Tasks Pending Review</h2>
          </div>
          <Table />
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <div className="w-2 h-6 bg-[#5048e5] rounded-full" />
            <Text19 />
          </div>
          <Table1 />
        </div>
      </div>
    </div>
  );
}

function StatsOverview() {
  return (
    <div className="grid grid-cols-4 gap-4 w-full" data-name="Stats Container">
      <StatCard label="Pending Review" value="6" color="#f59e0b" />
      <StatCard label="Approved Today" value="4" color="#059669" />
      <StatCard label="Revision Requested" value="2" color="#ef4444" />
      <StatCard label="Avg Review Time" value="4 hrs" color="#5048e5" />
    </div>
  );
}

export default function TaskApprovalsTasks() {
  return (
    <div className="bg-white min-h-screen w-full flex justify-center overflow-x-hidden" data-name="Task Approvals — Tasks">
      <div className="w-full max-w-[1280px] flex flex-col">
        <MainContent />
      </div>
    </div>
  );
}