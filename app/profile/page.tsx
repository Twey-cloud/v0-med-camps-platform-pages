"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { User, Lock, CreditCard, Briefcase, HelpCircle, Shield, FileText } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  return (
    <div className="pt-8 p-8 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1 max-w-3xl space-y-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
          </div>

          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  placeholder="Enter your email address"
                />
              </div>
              <Button className="bg-blue-400 hover:bg-blue-500">Save Changes</Button>
            </CardContent>
          </Card>

          {/* Change Password */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Change Password
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  placeholder="Enter your current password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  placeholder="Enter your new password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  placeholder="Confirm your new password"
                />
              </div>
              <Button className="bg-blue-400 hover:bg-blue-500">Update Password</Button>
            </CardContent>
          </Card>

          {/* Subscription Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Subscription Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div>
                  <h3 className="font-semibold text-blue-900">Premium Plan</h3>
                  <p className="text-sm text-blue-700">Full access to all GAMSAT resources</p>
                </div>
                <Badge className="bg-blue-600 hover:bg-blue-600">Active</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Next billing date:</span>
                  <span className="font-medium">March 15, 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium">$29.99/month</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Payment method:</span>
                  <span className="font-medium">•••• •••• •••• 4242</span>
                </div>
              </div>

              <Separator />

              <div className="flex gap-3">
                <Button className="bg-blue-400 hover:bg-blue-500">Manage Subscription</Button>
                <Button variant="outline">Update Payment Method</Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Account Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">127</div>
                  <p className="text-sm text-gray-600">Days Active</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">1,247</div>
                  <p className="text-sm text-gray-600">Questions Completed</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">85%</div>
                  <p className="text-sm text-gray-600">Average Score</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">42</div>
                  <p className="text-sm text-gray-600">Practice Sets</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="w-64 space-y-4">
          <Card className="bg-gray-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-700">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-sm h-8 px-3" size="sm">
                <Briefcase className="h-4 w-4 mr-2" />
                Work With Us
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm h-8 px-3" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Contact Us / Help
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-700">Legal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-sm h-8 px-3" size="sm">
                <Shield className="h-4 w-4 mr-2" />
                Privacy Policy
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm h-8 px-3" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Terms & Conditions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
