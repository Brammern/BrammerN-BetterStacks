import { DependencyContainer } from "tsyringe";
import { IModLoader } from "../models/spt/mod/IModLoader";
import { VFS } from "../utils/VFS";
import { BundleLoader } from "./BundleLoader";
import { ModTypeCheck } from "./ModTypeCheck";
import { PreAkiModLoader } from "./PreAkiModLoader";
export declare class PostAkiModLoader implements IModLoader {
    protected bundleLoader: BundleLoader;
    protected vfs: VFS;
    protected preAkiModLoader: PreAkiModLoader;
    protected modTypeCheck: ModTypeCheck;
    constructor(bundleLoader: BundleLoader, vfs: VFS, preAkiModLoader: PreAkiModLoader, modTypeCheck: ModTypeCheck);
    getModPath(mod: string): string;
    load(): Promise<void>;
    protected executeMods(container: DependencyContainer): Promise<void>;
    protected addBundles(): void;
}
