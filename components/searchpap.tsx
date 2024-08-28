
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import FileUpload from "@/components/FileUpload";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination"
import { Globe } from "lucide-react";
import { BookOpen } from "lucide-react";
export function Searchpap() {
  
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            SIH Papers
          </Link>
          <form className="relative w-full max-w-3xl">
            <div>
  <Input
    type="search"
    placeholder="Search papers..."
    className="w-full rounded-md bg-primary-foreground/10 px-4 py-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
  />
  
  <Button
    type="submit"
    variant="ghost"
    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-white hover:bg-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
    
  >
    
    
    <div className="flex items-center gap-10"> 
      <SearchIcon className="h-5 w-5 text-white" />
      <FileUpload />
    </div>
  </Button>
  
  </div>
</form>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <div className="container mx-auto py-8 px-6">
          <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
  {/* Filter by Title, Author, etc. */}
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="flex items-center gap-2">
        <FilterIcon className="h-5 w-5" />
        Filter
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" sideOffset={8}>
      <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem checked>Title</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Author</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Publication Date</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Keywords</DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>

  {/* Sort by Relevance, Date, etc. */}
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="flex items-center gap-2">
        <ListOrderedIcon className="h-5 w-5" />
        Sort
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" sideOffset={8}>
      <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value="relevance">
        <DropdownMenuRadioItem value="relevance">Relevance</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="date">Date (Newest)</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="date-asc">Date (Oldest)</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>

  {/* Filter by WOS */}
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Button variant="outline" className="flex items-center gap-2">
        <Globe className="h-5 w-5" />
        WOS
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" sideOffset={8}>
      <DropdownMenuLabel>Filter by WOS:</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem>Journal Articles</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Conference Papers</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Book Chapters</DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>

  {/* Filter by Google Scholar */}
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Button variant="outline" className="flex items-center gap-2">
        <BookOpen className="h-5 w-5" />
        Google Scholar
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" sideOffset={8}>
      <DropdownMenuLabel>Filter by Google Scholar:</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem>Articles</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Citations</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Patents</DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Results:</span>
              <span className="font-medium">1,234</span>
            </div>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-medium text-foreground hover:underline" prefetch={false}>
                    The Impact of Artificial Intelligence on the Future of Education
                  </Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  John Doe, Jane Smith, Michael Johnson
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This paper explores the potential impact of artificial intelligence on the future of education,
                  including personalized learning, automated grading, and intelligent tutoring systems. The authors
                  discuss the opportunities and challenges presented by this emerging technology.
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-muted-foreground">Published: January 15, 2023</div>
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">AI, Education</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-medium text-foreground hover:underline" prefetch={false}>
                    Sustainable Urban Planning: Strategies for Livable Cities
                  </Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground">Emily Chen, David Lee, Sarah Kim</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This paper examines the principles of sustainable urban planning and presents case studies of
                  successful implementations around the world. The authors discuss strategies for creating livable,
                  environmentally-friendly cities that improve the quality of life for residents.
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-muted-foreground">Published: March 1, 2022</div>
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Urban Planning, Sustainability</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-medium text-foreground hover:underline" prefetch={false}>
                    The Role of Blockchain in Supply Chain Management
                  </Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Michael Chen, Lisa Park, Robert Gonzalez
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This paper investigates the potential applications of blockchain technology in supply chain
                  management, including improved transparency, traceability, and efficiency. The authors discuss the
                  challenges and opportunities of implementing blockchain-based solutions in various industries.
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-muted-foreground">Published: September 20, 2021</div>
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Blockchain, Supply Chain</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-medium text-foreground hover:underline" prefetch={false}>
                    The Future of Remote Work: Challenges and Opportunities
                  </Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground">Sarah Lee, David Kim, Michael Park</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This paper explores the rise of remote work and its impact on the workforce, including the challenges
                  of maintaining productivity, collaboration, and work-life balance. The authors discuss strategies for
                  organizations to effectively manage and support remote teams.
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-muted-foreground">Published: June 1, 2023</div>
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Remote Work, Productivity</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-medium text-foreground hover:underline" prefetch={false}>
                    The Impact of Social Media on Mental Health
                  </Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground">Emily Nguyen, David Lee, Lisa Park</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This paper examines the relationship between social media use and mental health, including the effects
                  of social comparison, cyberbullying, and addiction. The authors discuss strategies for individuals and
                  organizations to promote healthy social media habits.
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-muted-foreground">Published: November 15, 2022</div>
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Social Media, Mental Health</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-medium text-foreground hover:underline" prefetch={false}>
                    The Future of Renewable Energy: Trends and Innovations
                  </Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Michael Chen, Lisa Park, Robert Gonzalez
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This paper explores the latest trends and innovations in renewable energy, including advancements in
                  solar, wind, and energy storage technologies. The authors discuss the potential for renewable energy
                  to replace fossil fuels and mitigate climate change.
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-muted-foreground">Published: April 1, 2023</div>
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Renewable Energy, Sustainability</span>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      
    </div>
  )
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}