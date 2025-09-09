import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ExternalLink, PlayCircle, Clock, Eye } from "lucide-react";

// Mock video data - replace with actual YouTube API integration
const mockVideos = [
  {
    id: "1",
    title: "iPhone 15 Pro Max Complete Review | Worth the Upgrade?",
    thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=225&fit=crop",
    duration: "12:45",
    views: "45K",
    uploadedAt: "2 days ago",
    category: "reviews"
  },
  {
    id: "2", 
    title: "Samsung Galaxy S24 Ultra Unboxing & First Impressions",
    thumbnail: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=225&fit=crop",
    duration: "8:32",
    views: "32K",
    uploadedAt: "1 week ago",
    category: "unboxing"
  },
  {
    id: "3",
    title: "Best Tech Under ₹10,000 in 2024 | Budget Tech Guide",
    thumbnail: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=225&fit=crop",
    duration: "15:20",
    views: "78K",
    uploadedAt: "2 weeks ago",
    category: "guide"
  },
  {
    id: "4",
    title: "MacBook Pro M3 Engineering Student Review",
    thumbnail: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=225&fit=crop",
    duration: "10:15",
    views: "56K",
    uploadedAt: "3 weeks ago",
    category: "reviews"
  },
  {
    id: "5",
    title: "OnePlus 12 vs Nothing Phone 2 Comparison",
    thumbnail: "https://images.unsplash.com/photo-1567794147060-b2c3c9c97982?w=400&h=225&fit=crop",
    duration: "18:45",
    views: "89K",
    uploadedAt: "1 month ago", 
    category: "comparison"
  },
  {
    id: "6",
    title: "Building the Ultimate Tech Setup for Engineering Students",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop",
    duration: "22:30",
    views: "125K",
    uploadedAt: "1 month ago",
    category: "guide"
  }
];

const VideoGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const filteredVideos = mockVideos
    .filter(video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterCategory === "all" || video.category === filterCategory)
    )
    .sort((a, b) => {
      if (sortBy === "popular") {
        return parseInt(b.views.replace('K', '')) - parseInt(a.views.replace('K', ''));
      }
      return 0; // Keep original order for "latest"
    });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Latest Videos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest tech reviews, unboxings, and engineering insights
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border focus:border-primary transition-colors"
            />
          </div>
          
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full md:w-[200px] bg-card border-border">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="reviews">Reviews</SelectItem>
              <SelectItem value="unboxing">Unboxing</SelectItem>
              <SelectItem value="guide">Guides</SelectItem>
              <SelectItem value="comparison">Comparisons</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[200px] bg-card border-border">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group bg-card border-border hover:shadow-glow-subtle transition-all duration-300 overflow-hidden animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Duration Badge */}
                  <Badge className="absolute bottom-2 right-2 bg-background/80 text-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </Badge>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-primary" />
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground capitalize">
                    {video.category}
                  </Badge>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{video.views} views</span>
                    </div>
                    <span>{video.uploadedAt}</span>
                  </div>

                  <Button 
                    className="w-full bg-gradient-primary text-background hover:shadow-glow-primary transition-all duration-300 group/btn"
                  >
                    <PlayCircle className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Watch on YouTube
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            Load More Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;