# Script to add YouTube entries to hosts file
$hostsFile = "$env:windir\System32\drivers\etc\hosts"

# Entries to add
$entries = @"

# YouTube entries added to resolve DNS issues
142.250.77.110 youtube.com
142.250.77.110 www.youtube.com
"@

# Add entries to hosts file
Add-Content -Path $hostsFile -Value $entries -Force

Write-Host "YouTube entries have been added to your hosts file."
Write-Host "You should now be able to access YouTube."

