import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

/**
 * 
 * Dont use home in list array as it already added
 * 
 */
export function BreadcrumbTemplate({
  items,
  className,
}: {
  items: Array<{
    name: string;
    url: string;
  }>;
  className?: string
}) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item, i) => (
          <React.Fragment key={i}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {items.length - 1 == i ? (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
