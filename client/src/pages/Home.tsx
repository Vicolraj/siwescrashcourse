import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, BookOpen, BarChart3, Zap, Target, Users, AlertCircle } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

/**
 * SIWES Project Management Crash Course
 * Design Philosophy: Modern, Professional, Educational
 * - Clean typography with clear hierarchy
 * - Accent color: Blue (#3B82F6) for primary actions
 * - Warm secondary color: Orange (#F97316) for highlights
 * - Ample whitespace for readability
 * - Interactive charts and visual demonstrations
 */

// Sample data for visualizations
const budgetData = [
  { category: "Materials", budgeted: 50000, actual: 52000 },
  { category: "Labor", budgeted: 30000, actual: 28500 },
  { category: "Equipment", budgeted: 15000, actual: 15000 },
  { category: "Contingency", budgeted: 10000, actual: 5200 },
];

const timelineData = [
  { week: "Week 1", planned: 5, actual: 4 },
  { week: "Week 2", planned: 12, actual: 11 },
  { week: "Week 3", planned: 18, actual: 17 },
  { week: "Week 4", planned: 25, actual: 26 },
  { week: "Week 5", planned: 32, actual: 33 },
];

const resourceData = [
  { name: "Labor", value: 35 },
  { name: "Materials", value: 25 },
  { name: "Equipment", value: 20 },
  { name: "Design", value: 15 },
  { name: "Contingency", value: 5 },
];

const COLORS = ["#3B82F6", "#F97316", "#10B981", "#F59E0B", "#EF4444"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900">SIWES PM Crash Course</h1>
          </div>
          <div className="flex gap-4">
            <button className="text-slate-600 hover:text-slate-900 transition">Docs</button>
            <button className="text-slate-600 hover:text-slate-900 transition">Tools</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                🎓 SIWES Placement Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Master Project Management in 12 Weeks
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Learn Gantt charts, Excel dashboards, and essential techniques used by professional project managers at design and construction institutes.
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Learning <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-slate-300">
                  View Tools
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555777628/7S5ZtPSvC2u6upqvUhMVf7/hero-gantt-chart-fNnjKD9EGrqXWAs8YpCFra.webp"
                alt="Gantt Chart Visualization"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="container">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Core Concepts You'll Master
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Gantt Charts",
                description: "Visual project timelines showing tasks, dependencies, milestones, and the critical path.",
              },
              {
                icon: BarChart3,
                title: "Excel Mastery",
                description: "Budget tracking, dashboards, formulas (SUMIFS, IF, VLOOKUP), and resource allocation.",
              },
              {
                icon: Users,
                title: "Project Techniques",
                description: "Critical Path Method, resource allocation, progress tracking, and risk management.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-slate-200 hover:shadow-lg transition-shadow">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboards */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Project Management Dashboards
          </h3>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            See real-world examples of how to track budgets, timelines, and resources using Excel and project management tools.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="budget">Budget Tracking</TabsTrigger>
              <TabsTrigger value="timeline">Schedule Status</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="budget" className="space-y-6">
              <Card className="p-8 border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Budget vs. Actual Costs</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={budgetData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="budgeted" fill="#3B82F6" name="Budgeted" />
                    <Bar dataKey="actual" fill="#F97316" name="Actual" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-blue-900">Key Insight</p>
                      <p className="text-blue-800 text-sm">Materials are $2,000 over budget. Labor is $1,500 under budget. Overall project is $500 over.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-6">
              <Card className="p-8 border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Project Progress Over Time</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="planned" stroke="#3B82F6" name="Planned %" strokeWidth={2} />
                    <Line type="monotone" dataKey="actual" stroke="#10B981" name="Actual %" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex gap-2">
                    <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900">Status: On Track</p>
                      <p className="text-green-800 text-sm">Project is 33% complete (Week 5). Slightly ahead of schedule by 1%.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <Card className="p-8 border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Resource Allocation Breakdown</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={resourceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {resourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {resourceData.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                      <span className="text-sm text-slate-600">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Your 12-Week Learning Path
          </h3>
          <div className="space-y-4">
            {[
              { week: "Week 1-2", title: "Learn the Basics", desc: "Understand WBS, Gantt charts, and Excel templates" },
              { week: "Week 3-4", title: "Support Scheduling", desc: "Update tasks, identify critical path, create reports" },
              { week: "Week 5-8", title: "Manage Budget & Resources", desc: "Track costs, allocate resources, report status" },
              { week: "Week 9-12", title: "Lead a Small Task", desc: "Manage a sub-project independently" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-900">{item.week}: {item.title}</h4>
                  <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Software */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Tools & Software You'll Use
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Microsoft Excel", level: "Beginner", icon: "📊" },
              { name: "Microsoft Project", level: "Intermediate", icon: "📋" },
              { name: "Primavera P6", level: "Advanced", icon: "🏗️" },
              { name: "AutoCAD", level: "Intermediate", icon: "🎨" },
              { name: "Revit (BIM)", level: "Advanced", icon: "🏢" },
              { name: "ScheduleReader", level: "Beginner", icon: "👁️" },
              { name: "Google Sheets", level: "Beginner", icon: "☁️" },
              { name: "Power BI", level: "Intermediate", icon: "📈" },
            ].map((tool, idx) => (
              <Card key={idx} className="p-6 border-slate-200 text-center hover:shadow-md transition">
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{tool.name}</h4>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                  {tool.level}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 bg-blue-50 border-t border-blue-200">
        <div className="container">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Key Takeaways
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Gantt charts are essential for visualizing project schedules and dependencies",
              "Excel is your most accessible tool for budgeting, tracking, and reporting",
              "Critical Path determines project duration—manage it carefully",
              "Resource allocation ensures efficient use of people and equipment",
              "Regular updates and clear communication are vital for success",
              "Risk management helps you anticipate and mitigate problems early",
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg border border-blue-200">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-bold">
                    ✓
                  </div>
                </div>
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Excel at Your SIWES Placement?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Download the complete crash course guide, Excel templates, and Gantt chart examples to get started immediately.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Download Guide
            </Button>
            <Button variant="outline" className="border-slate-300">
              Get Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">About This Course</h4>
              <p className="text-sm">A comprehensive guide to project management tools and techniques for SIWES students at design and construction institutes.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Gantt Chart Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Excel Formulas</a></li>
                <li><a href="#" className="hover:text-white transition">Project Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm">Questions? Reach out to your institute's project management team or supervisor.</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2026 SIWES Project Management Crash Course. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
