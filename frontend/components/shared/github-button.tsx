import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { Icons } from './icons';

export function GitHubButton() {
    return (
        <div className="flex justify-center py-10">
            <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                    buttonVariants({
                        variant: 'outline',
                        size: 'lg',
                        rounded: 'full',
                    }),
                    'px-5',
                )}
            >
                <Icons.gitHub className="mr-2 size-4" />
                <p>
                    Star{' '}
                    <span className="hidden sm:inline-block">MemFree on</span>{' '}
                    GitHub{' '}
                </p>
            </Link>
        </div>
    );
}
