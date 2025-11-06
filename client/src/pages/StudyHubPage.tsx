import { useState } from "react";
import { StudyRoomCard } from "@/components/StudyRoomCard";
import { ChatMessage } from "@/components/ChatMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Send, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StudyHubPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");

  const subjects = ["All", "Computer Science", "Mathematics", "Physics", "Chemistry"];
  
  const rooms = [
    {
      id: "1",
      name: "Data Structures Final Prep",
      subject: "Computer Science",
      memberCount: 5,
      maxMembers: 10,
      status: "active" as const,
    },
    {
      id: "2",
      name: "Calculus Study Group",
      subject: "Mathematics",
      memberCount: 8,
      maxMembers: 10,
      status: "scheduled" as const,
      scheduledAt: new Date(Date.now() + 86400000),
    },
    {
      id: "3",
      name: "Physics Problem Solving",
      subject: "Physics",
      memberCount: 6,
      maxMembers: 12,
      status: "active" as const,
    },
  ];

  const messages = [
    { id: "1", sender: "Alice Chen", message: "Hey everyone! Ready for today's study session?", timestamp: new Date(Date.now() - 3600000), isOwnMessage: false },
    { id: "2", sender: "You", message: "Yes! I have some questions about the last lecture.", timestamp: new Date(Date.now() - 3000000), isOwnMessage: true },
    { id: "3", sender: "Bob Wilson", message: "Same here. Can we go over the recursion examples?", timestamp: new Date(Date.now() - 1800000), isOwnMessage: false },
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      <div className="w-96 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search rooms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
              data-testid="input-search-rooms"
            />
          </div>
          <Button size="icon" data-testid="button-create-room">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <Badge
              key={subject}
              variant={selectedSubject === subject.toLowerCase() ? "default" : "secondary"}
              className="cursor-pointer hover-elevate"
              onClick={() => setSelectedSubject(subject.toLowerCase())}
              data-testid={`filter-${subject.toLowerCase()}`}
            >
              {subject}
            </Badge>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto space-y-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room.id)}
              className={selectedRoom === room.id ? "ring-2 ring-primary rounded-lg" : ""}
            >
              <StudyRoomCard
                {...room}
                onJoin={() => console.log("Join room", room.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <Card className="flex-1 flex flex-col">
        {selectedRoom ? (
          <>
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-card-foreground">Data Structures Final Prep</h2>
              <p className="text-sm text-muted-foreground">5 members active</p>
            </div>

            <Tabs defaultValue="chat" className="flex-1 flex flex-col">
              <TabsList className="mx-4 mt-4">
                <TabsTrigger value="chat" data-testid="tab-chat">Chat</TabsTrigger>
                <TabsTrigger value="members" data-testid="tab-members">Members</TabsTrigger>
                <TabsTrigger value="schedule" data-testid="tab-schedule">Schedule</TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className="flex-1 flex flex-col mt-4">
                <div className="flex-1 overflow-y-auto px-4 space-y-4">
                  {messages.map((msg) => (
                    <ChatMessage key={msg.id} {...msg} />
                  ))}
                </div>

                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      data-testid="input-message"
                    />
                    <Button onClick={handleSendMessage} data-testid="button-send-message">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="members" className="flex-1 p-4">
                <p className="text-muted-foreground">Members list would be displayed here</p>
              </TabsContent>

              <TabsContent value="schedule" className="flex-1 p-4">
                <p className="text-muted-foreground">Schedule session interface would be displayed here</p>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a study room to start chatting
          </div>
        )}
      </Card>
    </div>
  );
}
