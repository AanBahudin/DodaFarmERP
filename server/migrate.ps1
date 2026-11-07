Get-Content .env | ForEach-Object {
    if ($_ -match '^\s*([^#=\s]+)\s*=\s*(.*)$') {
        [Environment]::SetEnvironmentVariable($matches[1], $matches[2].Trim('"'), 'Process')
    }
}

migrate -path migrations -database $env:DATABASE_URL @args