---
title: EZArchiver (Rust)
summary: A file compresssion and extraction tool built in Rust, supporting multiple formats like ZIP, TAR, and GZ. This project explores file I/O, compression algorithms, and Test-Driven Development (TDD) in Rust.
image: /images/projects/rust-file-compressor/ezarc-thumbnail.png
author: 'Tarun Jeevan'
publishedAt: '2025-08-18'
tags: ['Rust', 'TDD', 'I/O', 'File Compression']
---
![EZArchiver Thumbnail](/images/projects/rust-file-compressor/ezarc-thumbnail.png)

## **Project Overview**
**EZArchiver** is a command-line utility written in Rust for archiving and extracting files. The project aims to provide a simple, robust, and extensible tool supporting multiple archive formats, with a focus on ZIP, GZIP, BZIP2, and TAR. It&apos;s a personal project I started to deepen my understanding of file I/O, compression algorithms, and Test-Driven Development (TDD) in Rust. 

The project started as a simple file compressor and extractor, but evolved into a more comprehensive tool that greatly enhanced my understanding of how to handle file operations, implement compression algorithms, and write tests to ensure correctness - all using Rust&apos;s type system and module organization. This post covers the design, structure, challenges, and solutions encountered during its development.

- **Development Period**: July 2025 - August 2025
- **GitHub Reponsitory**: [Rust Journey Repo](https://github.com/tarunJeevan/rust-journey)

## **Project Objectives**
The main goal was to build an extensible file compression/extraction utility that can:
- Archive one or more files into an archive.
- Archive a directory recursively.
- Extract files from an archive.
- Support multiple formats (ZIP, TAR, GZ).

## **Project Structure**
The project is organized for clarity and extensibility:

```
8-file_compressor/
├── Cargo.toml
├── tests/
│   └── cli_snapbox.rs
└── src/
    ├── main.rs
    ├── utils.rs
    └── commmands/
        ├── extract.rs
        └── compress.rs
```
- **CLI Parsing**: Uses `clap` crate for command-line argument parsing, supporting subcommands and flags for different operations and archive formats.
- **Error Handling**: Utilizes `anyhow` for context-rich error handling.
- **Compression/Extraction**: Implements compression and extraction logic for ZIP (with planned support for GZIP, BZIP2, and TAR) using the `zip` crate.
- **Testing**: Employs `snapbox` for snapshot testing of CLI outputs, ensuring consistent behavior across changes. For unit tests, Rust&apos;s built-in test framework is used with the `tempfile` crate for organic testing.

## **Key Features and Functionality**
- **Multiple Input Types**: Supports compressing/extracting single files, multiple files, and entire directories recursively. 

- **Flexible Extraction**: Allows specifying output directories for extracted files, with safety features to prevent or avoid data corruption. 

- **Format Validation**: Validates archive formats and file extensions before processing and provides informative error messages for unsupported or corrupted files. 

- **Extensible Schema**: Currently supports ZIP format with plans to add GZIP, BZIP2, and TAR. The project is structured to easily add new formats.

## **Implementation Highlights**
### **CLI Schema with `clap`**
The CLI schema supports compression by default and extraction with the `-x` flag. The archive format can be specified with the appropriate flag as well (default is ZIP).

```rs
#[derive(Parser)]
#[command(
    version,
    about = "A CLI utility for archiving and extracting files. \
        It archives by default but can also be used to extract archives.",
    long_about = None,
)]
struct Cli {
    /// Extract provided input file(s)
    #[arg(short = 'x', long)]
    extract: bool,

    /// Output archive path. Extension must match archive format, e.g., ".zip" for ZIP format
    #[arg(num_args = 1)]
    output: PathBuf,

    /// Input file path(s)
    #[arg(num_args = 1..)]
    input: Vec<PathBuf>,

    #[command(flatten)]
    schema: Option<Schema>,
}

#[derive(Args)]
#[group(required = false, multiple = false)]
struct Schema {
    /// Use ZIP compression (Default)
    #[arg(long)]
    zip: bool,

    /// Use BZIP2 compression
    #[arg(long)]
    bzip2: bool,

    /// Use GZIP compression
    #[arg(long)]
    gzip: bool,
}

```

### **Integration Testing with `snapbox`**
Integration tests ensure the CLI behaves as expected across various scenarios. The `snapbox` crate is used for snapshot testing of CLI outputs under different conditions.

```rs
#[test]
/// Tests that the program succeeds when provided input arguments of multiple types, 
// such as files and directories
fn success_with_multiple_args() -> Result<()> {
    let tmp_dir_1 = TempDir::with_prefix("test_input_dir")?;
    let tmp_dir_2 = tempdir()?;
    let input_dir = tmp_dir_2.path();

    let input_1 = create_temp_file(input_dir, "test_input_1.txt", "Hello!");
    
    Command::new(cargo_bin!("ezarc"))
        .arg("test_out.zip")
        .args([
            input_1.canonicalize()?.display().to_string(), 
            tmp_dir_1.path().canonicalize()?.display().to_string()
        ])
        .assert()
        .success();
    
    Ok(())
}
```

### **Examples**
- **Simple Usage**: An example of compressing a large file into a ZIP archive. 
![EZArchiver Usage Example](/images/projects/rust-file-compressor/ezarc-usage.png)

- **Help Documentation**: The CLI provides built-in help documentation for users.
![EZArchiver Help Documentation](/images/projects/rust-file-compressor/ezarc-help.png)

## **Challenges and Solutions**
1. **Handling Corrupted or Incomplete Archives**: When appending to an existing ZIP archive, the archive could become corrupted if it wasn&apos;t finalized properly, leading to errors like `InvalidArchive("Invalid local file header")`. **_The solution was twofold:_** 
   - Always finalize the archive with `writer.finish()` after creating or writing to an archive.
   - Validate the archive before appending and provide clear error messages. Only if the archive is corrupted should the program create a new one. This would overwrite the existing archive, but corrupted archives are unusable anyway.

2. **File and Directory Structure Preservation**: Maintaining the original directory structure inside the archive, especially when compressing directories recursively, proved to be a challenge requiring a fair amount of research to not only effectively traverse a directory but to preserve its structure in the archive. **_The solution was twofold:_**
   - Use `walkdir` crate to traverse directories recursively, ensuring all files and subdirectories are included.
   - When adding files to the archive, use relative paths to preserve the directory structure within the archive.

3. **Overwriting vs Appending During Extraction**: Clarifying whether extracting multiple archives to the same output directory should overwrite or append files was something I struggled with for a while. Eventually, I decided to implement the simpler solution for the time being. **_The solution was twofold:_**
   - Extraction appends to the output directory by default, creating new files or overwriting existing ones as necessary.
   - A planned feature is to reverse this behavior so the program terminates if a path already exists. A `--force` flag would then be implemented to allow users to explicitly choose to overwrite existing files.

4. **Robust CLI and Input Validation**: Ensuring the CLI is user-friendly and prevents invalid operations (e.g., extracting non-archive files) proved to be more complex than initially anticipated. **_The solution was twofold:_**
   - Use the `clap` crate to define clear subcommands and flags, providing built-in help messages and validation.
   - Implement custom validation logic to check file extensions and formats before performing operations, returning informative error messages for unsupported or invalid inputs.

5. **Testing**: Automating tests for various CLI scenarios and ensuring reliability before merging changes required new solutions. I wanted to not only implement integration testing in addition to my usual unit testing but also implement a CI pipeline to automate said testing. **_The solution was threefold:_**
   - Use the `snapbox` crate for CLI integration testing. This crate allows easy snapshot testing of CLI outputs, ensuring consistent behavior across changes.
   - Write unit tests using Rust&apos;s built-in test framework, leveraging the `tempfile` crate to create temporary files and directories for testing compression and extraction functionalities.
   - Set up a GitHub Actions workflow to run cargo test on pushes and pull requests targeting the main branch.

## **Lessons Learned**
- **Finalize Archives**: Having never worked with ZIP archives before, I learned the importance of finalizing archives properly to avoid corruption. Conversely, I also realized the importance of validating archives before appending to them.
- **Test Early and Often**: Testing is crucial, especially for file operations where data integrity is paramount. Writing tests early in the development process helped me catch bugs and edge cases. Combining both unit and integration tests provided comprehensive coverage and adding Continuous Integration (CI) via GitHub Workflows ensured that tests were run automatically before every major change, maintaining code quality and robustness.
- **Design for Extensibility**: In addition to modularizing the codebase, I learned to design with future features in mind, making it easier to add new compression formats and functionalities later.

## **Future Development Plans**
- Reverse current extraction logic to avoid overwriting and add a `--force` flag to allow uers to choose when to overwrite existing files during extraction.
- Implement support for additional archive formats like GZIP, BZIP2, and TAR.
- Enhance error handling and user feedback with specific error messages, exit codes, and documentation for a better user experience.
- Implement a progress bar using something like `indicatif` to provide visual feedback during long operations.
- Add UX features like verbose mode, quiet mode, and dry-run mode.
- Add support for modern compression algorithms like Zstandard (zstd) for better performance.
- Implement encryption and password protection for archives.

## **Conclusion**
EZArchiver demonstrates how Rust&apos;s ecosystem enables building reliable, high-performance CLI tools. By focusing on modularity, robust error handling, and thorough testing, the project is well-positioned for future growth and real-world use. 

For a closer look at the codebase and implementation details, visit the [GitHub Repository](https://github.com/tarunJeevan/rust-journey).